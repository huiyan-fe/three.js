export default /* glsl */`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV ) || defined( ENVMAP_TYPE_CUBE )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			#if defined( ENVMAP_TYPE_CUBE_UV )

				vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
				vec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );

			#else

				vec4 envMapColor = textureCube( envMap, worldNormal );

			#endif

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV ) || defined( ENVMAP_TYPE_CUBE )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			#if defined( ENVMAP_TYPE_CUBE_UV )

				vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			#else

				vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
				vec4 envMapColor = textureCube( envMap, queryReflectVec );

			#endif

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`;
