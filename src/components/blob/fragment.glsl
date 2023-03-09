uniform float u_time;
uniform float u_intensity;
uniform float u_scroll_pos;
uniform float u_boost_red;
uniform float u_boost_green;
uniform float u_boost_blue;

varying vec2 vUv;
varying float vDisplacement;

void main() {
  float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 );
  vec3 color = vec3(abs(vUv - 0.5) * 2.0 * (1.0 - distort) ,1.0);
  gl_FragColor = vec4(color.r + u_boost_red, color.g + u_boost_green, color.b + u_boost_blue, 1.0);
}