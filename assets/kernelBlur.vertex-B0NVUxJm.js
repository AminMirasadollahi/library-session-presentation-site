import{n as e}from"./index-DyFjlgih.js";import{t}from"./shaderStore-D-XQlhUT.js";import"./kernelBlurVaryingDeclaration-Bcpph3LR.js";var n=`kernelBlurVertex`,r=`vertexOutputs.sampleCoord{X}=vertexOutputs.sampleCenter+uniforms.delta*KERNEL_OFFSET{X};`;t.IncludesShadersStoreWGSL[n]||(t.IncludesShadersStoreWGSL[n]=r);var i=e({kernelBlurVertexShaderWGSL:()=>s}),a=`kernelBlurVertexShader`,o=`attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;t.ShadersStoreWGSL[a]||(t.ShadersStoreWGSL[a]=o);var s={name:a,shader:o};export{i as n,s as t};