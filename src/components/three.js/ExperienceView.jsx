import {
    OrbitControls,
    Environment,
    Html,
    useProgress,
    View,
    PerspectiveCamera
  } from "@react-three/drei";
  import { Canvas } from "@react-three/fiber";
  import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import SceneSelector from "./SceneSelector";
import { useInView } from "react-intersection-observer";
  
  
  const primitivos = [
    { elemento: <planeGeometry />, tamaño: 2 },
    { elemento: <sphereGeometry />, tamaño: 0.7 },
    { elemento: <boxGeometry />, tamaño: 0.6 },
  ];
  
  
  export default function ExperienceView({name, category}) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
      });
  
    const containerRef = useRef();
  
    useLayoutEffect(() => {
      const container = containerRef.current; // Aquí accedemos directamente a la referencia actualizada
      if (!container) return;
  
      const handleResize = () => {
        const { clientWidth, clientHeight } = container;
        container.style.width = `${clientWidth}px`;
        container.style.height = `${clientHeight}px`;
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // No necesitas incluir containerRef.current en la lista de dependencias
  
  
    return (
      <View className="view" ref={ref}>
     
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={1.0}
          /* enableZoom={false} */
          autoRotate={true}
          minDistance={1}
          maxDistance={2}
        />
  <PerspectiveCamera makeDefault position={[0, 0, 1]} fov={75} />
        <directionalLight castShadow position={[1, 2, 3]} intensity={5.2} />
        <ambientLight intensity={1} />
        <Environment preset={"sunset"} />
        
  
  
        <Suspense fallback={null }>
          <SceneSelector category={category} name={name} inView={inView}/>
        </Suspense>
             
  
  
  
  
       
      </View>
    );
  }
  