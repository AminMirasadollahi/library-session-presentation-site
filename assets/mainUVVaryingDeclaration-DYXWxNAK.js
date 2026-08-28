import{t as e}from"./shaderStore-D-XQlhUT.js";var t=`logDepthDeclaration`,n=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=n);var r=`mainUVVaryingDeclaration`,i=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=i);