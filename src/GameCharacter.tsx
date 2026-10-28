import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { Game } from "./games";
import { DressedStyle, styleFor, Body } from "./character";
import { buildHuman, addLights, Human } from "./three/human";

/** A stable hash from a string, for deterministic character styles. */
function hashString(str: string): number {
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    n = Math.imul(n ^ str.charCodeAt(i), 0x45d9f3b);
    n = Math.imul(n ^ (n >>> 16), 0x45d9f3b);
  }
  return (n ^ (n >>> 16)) >>> 0;
}

/** Generate a deterministic DressedStyle from a game slug. */
function styleForGame(slug: string): DressedStyle {
  const h = hashString(slug);
  const body: Body = (h & 1) ? "female" : "male";
  const base = styleFor(h, body);
  // Add some variety in hat/accessory for games
  const hats = ["none", "cap", "beanie", "tophat", "crown"] as const;
  const accessories = ["none", "glasses", "earrings", "beard", "scarf", "backpack"] as const;
  return {
    ...base,
    hat: hats[(h >>> 2) % hats.length],
    accessory: accessories[(h >>> 5) % accessories.length],
  };
}

type Props = {
  game: Game;
  className?: string;
  /** Size in pixels (square) */
  size?: number;
};

/**
 * Renders a Three.js character for a game.
 * Deterministic style from the game slug, non-interactive, optimized for small previews.
 */
export function GameCharacter({ game, className, size = 120 }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const style = useMemo(() => styleForGame(game.slug), [game.slug]);

  useEffect(() => {
    const el = host.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    addLights(scene);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.04).texture;
    room.dispose();
    scene.environment = env;
    scene.environmentIntensity = 0.35;

    // Camera: closer for small previews
    const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 20);
    camera.position.set(0, 1.05, 4.3);
    camera.lookAt(0, 0.88, 0);

    // Soft round shadow
    const shadowTex = (() => {
      const c = document.createElement("canvas");
      c.width = c.height = 64;
      const g = c.getContext("2d")!;
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(0,0,0,.28)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();
    const shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.9, 0.9),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    shadow.rotation.x = -Math.PI / 2;
    scene.add(shadow);
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 4),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.001;
    floor.receiveShadow = true;
    scene.add(floor);

    const turntable = new THREE.Group();
    scene.add(turntable);
    let human: Human | null = null;
    human = buildHuman(style);
    turntable.add(human.root);

    const resize = () => {
      const w = el.clientWidth || size;
      const h = el.clientHeight || size;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.z = Math.max(4.3, 3.1 / Math.min(1, camera.aspect * 1.6));
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    const clock = new THREE.Clock();
    let raf = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;
      human?.update(t);
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      human?.dispose();
      shadow.geometry.dispose();
      (shadow.material as THREE.Material).dispose();
      shadowTex.dispose();
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      env.dispose();
      pmrem.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      el.removeChild(renderer.domElement);
    };
  }, [style, size]);

  return <div ref={host} className={`game-character ${className ?? ""}`} style={{ width: size, height: size }} />;
}