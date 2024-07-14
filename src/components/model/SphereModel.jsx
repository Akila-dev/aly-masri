/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
	Decal,
	Float,
	Preload,
	useTexture,
	OrbitControls,
} from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

import CanvasLoader from '../Loader';
import { images } from '../../constants';

const Sphere = (props) => {
	const [decal] = useTexture([props.imgUrl]);

	const texture = useLoader(TextureLoader, images.earth2);

	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={0}>
			<ambientLight intensity={2} />
			<directionalLight position={[0, 0, 0.02]} intensity={1} />
			<directionalLight position={[0, 0, -0.02]} intensity={1} />
			<mesh castShadow receiveShadow scale={2.6}>
				<sphereGeometry args={[1, 128, 128]} />
				{/* <meshStandardMaterial map={texture} /> */}
				<meshStandardMaterial
					color="#edf2f8"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				{/* <Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/> */}
			</mesh>
		</Float>
	);
};

const SphereModel = ({ icon }) => (
	<Canvas
		// frameloop="demand"
		dpr={[1, 2]}
		gl={{ preserveDrawingBuffer: true }}
	>
		<Suspense fallback={<CanvasLoader />}>
			<OrbitControls
				autoRotate
				enableZoom={false}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 2}
			/>
			<Sphere imgUrl={icon} />
		</Suspense>
		<Preload all />
	</Canvas>
);

export default SphereModel;
