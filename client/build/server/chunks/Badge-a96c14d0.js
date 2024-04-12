import { c as create_ssr_component, v as validate_component, d as add_attribute } from './ssr-b8a31716.js';

const Hexagon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill = "#CACBD6" } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  return `<svg width="85" height="90" viewBox="0 0 85 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.1591 19.1636L47.3332 4.8419C45.7927 4.14782 44.066 3.77539 42.3562 3.77539C40.6464 3.77539 38.9196 4.14782 37.3791 4.8419L5.55323 19.1636C4.46979 19.6545 3.80957 20.5686 3.80957 21.5336V67.8504C3.80957 67.9859 3.8265 68.1213 3.84343 68.2398C3.99579 69.0693 4.62215 69.7972 5.55323 70.2205C5.55323 70.2205 38.1917 84.8807 38.2764 84.9145C39.5629 85.3716 40.9511 85.6086 42.3392 85.6086C42.4747 85.6086 42.6101 85.6086 42.7625 85.6086C42.864 85.6086 42.9825 85.5917 43.0841 85.5917C44.5569 85.507 46.0128 85.1516 47.3163 84.559L79.1422 70.2374C79.3453 70.1527 79.5315 70.0342 79.7008 69.9157C79.7685 69.865 79.8363 69.8142 79.904 69.7634C80.4796 69.3063 80.8181 68.6969 80.8858 68.0367C80.8858 67.9689 80.9028 67.9182 80.9028 67.8504V21.5336C80.9028 20.5517 80.2426 19.6376 79.1591 19.1636Z"${add_attribute("fill", fill, 0)}></path><path d="M80.699 15.7098L48.8731 1.38815C46.8586 0.474005 44.5901 0 42.3386 0C40.0871 0 37.8356 0.474005 35.8042 1.38815L3.97824 15.7098C1.52358 16.8102 0 19.0448 0 21.5333V67.8501C0 70.3387 1.52358 72.5563 3.97824 73.6736L35.8042 87.9953C37.8187 88.9094 40.0871 89.3834 42.3386 89.3834C44.5901 89.3834 46.8417 88.9094 48.8731 87.9953L80.699 73.6736C83.1537 72.5732 84.6773 70.3387 84.6773 67.8501V21.5333C84.6773 19.0448 83.1537 16.8271 80.699 15.7098ZM82.612 67.8501C82.612 67.9179 82.612 68.0025 82.612 68.0702C82.612 68.1379 82.612 68.1887 82.595 68.2564C82.5781 68.4257 82.5442 68.595 82.5104 68.7643C82.4765 68.8828 82.4427 69.0182 82.4088 69.1367C82.358 69.2891 82.3072 69.4245 82.2226 69.5599C82.1887 69.6277 82.1549 69.6784 82.138 69.7462C82.1041 69.8139 82.0702 69.8816 82.0194 69.9324C81.9856 70.0001 81.9348 70.0509 81.9009 70.1186C81.8671 70.1863 81.8163 70.2371 81.7655 70.3048C81.7147 70.3725 81.6639 70.4233 81.6301 70.491C81.5793 70.5418 81.5454 70.5926 81.4947 70.6434C81.3931 70.7619 81.2746 70.8634 81.1561 70.9819C81.0884 71.0327 81.0376 71.0835 80.9699 71.1343C80.8852 71.202 80.8175 71.2528 80.7329 71.3036C80.6313 71.3713 80.5297 71.439 80.4282 71.5067C80.3604 71.5406 80.2927 71.5914 80.2081 71.6252C80.2081 71.6252 80.1912 71.6252 80.1912 71.6422C80.0896 71.693 80.0049 71.7437 79.9034 71.7776C79.9034 71.7776 47.6204 86.3024 47.3834 86.387C47.2141 86.4548 47.0279 86.5225 46.8586 86.5733C46.757 86.6071 46.6724 86.641 46.5708 86.6579C46.4862 86.6748 46.4015 86.7087 46.3169 86.7256C46.1307 86.7764 45.9614 86.8272 45.7752 86.878C45.6905 86.8949 45.5889 86.9288 45.5043 86.9457C45.4196 86.9626 45.335 86.9796 45.2334 86.9965C45.2165 86.9965 45.2165 86.9965 45.1996 86.9965C45.0303 87.0303 44.8441 87.0642 44.6748 87.0981C44.6071 87.115 44.5394 87.115 44.4716 87.1319C44.4378 87.1319 44.4039 87.1488 44.387 87.1488C44.3362 87.1488 44.3024 87.1658 44.2516 87.1658H44.2346C44.15 87.1827 44.0484 87.1827 43.9638 87.1996C43.9469 87.1996 43.9468 87.1996 43.9299 87.1996C43.8961 87.1996 43.8622 87.2166 43.8284 87.2166C43.6929 87.2335 43.5575 87.2335 43.439 87.2504C43.3374 87.2673 43.2189 87.2673 43.1173 87.2673C42.8803 87.2843 42.6433 87.2843 42.4063 87.2843C42.0339 87.2843 41.6615 87.2673 41.306 87.2335C41.1875 87.2166 41.069 87.2165 40.9505 87.1996C40.832 87.1827 40.7135 87.1658 40.578 87.1488C40.4934 87.1319 40.4088 87.1319 40.3241 87.115C40.2225 87.098 40.121 87.0811 40.0194 87.0642C39.884 87.0473 39.7316 87.0134 39.5962 86.9795C39.4946 86.9626 39.41 86.9457 39.3084 86.9118C39.1899 86.8949 39.0883 86.8611 38.9698 86.8272C38.8852 86.8103 38.7836 86.7764 38.699 86.7595C38.5974 86.7256 38.4958 86.7087 38.3942 86.6748C38.2927 86.641 38.1911 86.6071 38.0726 86.5733C37.9541 86.5394 37.8356 86.5056 37.734 86.4548C37.6155 86.4209 37.497 86.3701 37.3955 86.3363C37.2939 86.3024 37.1923 86.2516 37.0738 86.2178C37.0569 86.2178 37.04 86.2008 37.0061 86.2008C37.0061 86.2008 36.9892 86.2008 36.9892 86.1839C36.9214 86.15 30.1838 83.1198 30.1838 83.1198L29.5575 82.849L11.0375 74.5031L7.97341 73.115H7.95648L4.90932 71.7437C4.11367 71.3882 3.45345 70.8635 2.99638 70.2371C2.45466 69.5261 2.16687 68.6966 2.16687 67.8163V21.5333C2.16687 19.8743 3.21645 18.3676 4.92625 17.6058L36.7522 3.28416C38.5127 2.48851 40.4765 2.08223 42.4233 2.08223C44.387 2.08223 46.3507 2.50544 48.0944 3.28416L79.9203 17.6058C81.6132 18.3676 82.6797 19.8743 82.6797 21.5333V67.8501H82.612Z"${add_attribute("fill", fill, 0)}></path></svg>`;
});
const RoundedHexagon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill = "#CACBD6" } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  return `<svg width="81" height="83" viewBox="0 0 81 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M74.0493 11.912C74.0493 11.912 54.6831 2.907 54.2732 2.73993C52.5996 2.03824 50.8576 1.47021 49.0986 1.03583C48.8083 0.969004 48.518 0.902174 48.2277 0.835346C46.8614 0.534622 45.4781 0.317433 44.1119 0.183777C43.8728 0.16707 43.6337 0.133657 43.3776 0.116951C42.4212 0.0501228 41.4819 0 40.5939 0C40.3377 0 40.0816 1.01946e-06 39.8425 0.0167079C39.6205 0.0167079 39.3984 0.016709 39.1935 0.0334159C38.1176 0.0668297 37.0588 0.150364 36.017 0.28402C35.8121 0.300727 35.6243 0.334141 35.4193 0.367554C34.4288 0.50121 33.4554 0.684983 32.5332 0.902173C32.3453 0.935587 32.1745 0.985711 31.9867 1.03583C31.0816 1.25302 30.1935 1.50363 29.3226 1.78764C29.1518 1.83776 28.981 1.90459 28.8102 1.95471C27.9905 2.22202 27.1707 2.55616 26.351 2.907C26.1973 2.97383 26.0436 3.04066 25.8899 3.10749C25.7021 3.19102 25.5142 3.27456 25.3264 3.35809C25.3264 3.35809 6.71157 12.029 6.59203 12.0958C5.8406 12.4634 5.14041 12.9312 4.47438 13.4491C4.35484 13.5493 4.23529 13.6496 4.11575 13.7498C3.50095 14.2844 2.9203 14.8859 2.44213 15.5374C2.33966 15.6711 2.23719 15.788 2.1518 15.9217C1.67362 16.6067 1.24668 17.3585 0.922204 18.1604C0.853893 18.3108 0.785581 18.4779 0.734348 18.6449C0.392792 19.5471 0.204938 20.4827 0.0683153 21.435V21.4517C0.0512375 21.6522 0.0341566 21.8527 0.0170788 22.0531C1.04209e-06 22.2703 0 22.5042 0 22.7214C0 22.7214 0.0170799 60.9469 0.0341576 61.2309C0.0512354 61.4982 0.085391 61.7488 0.119547 61.966C0.63188 65.5914 2.88615 68.8492 6.11385 70.6703C6.37002 70.8206 6.64326 70.9543 6.96774 71.1047C6.96774 71.1047 26.4535 80.1598 27.0171 80.3937C27.3928 80.5441 27.7685 80.6944 28.11 80.8114C29.6983 81.3961 31.3377 81.8639 32.9943 82.2148C33.2675 82.2816 33.5578 82.3317 33.8311 82.3818C36.0341 82.7995 38.2713 83 40.5085 83C45.7172 83 50.9772 81.8472 55.6907 79.6419L74.0493 71.088C74.5275 70.8708 74.9715 70.6202 75.3643 70.3696C76.8329 69.4507 78.0626 68.2812 79.0018 66.8444C79.3092 66.3933 79.5825 65.9088 79.8386 65.3909C80.146 64.756 80.4022 64.0711 80.5901 63.3861C80.6413 63.2023 80.6925 63.0018 80.7267 62.818C80.795 62.534 80.8462 62.2333 80.8804 61.9326C80.9658 61.3812 80.9999 60.8299 80.9999 60.2953V22.7214C81.017 18.127 78.2846 13.8835 74.0493 11.912Z"${add_attribute("fill", fill, 0)}></path></svg>`;
});
const Crest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill = "#CACBD6" } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  return `<svg width="78" height="83" viewBox="0 0 78 83" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M77.911 35.1044C77.911 35.0206 77.8265 32.9418 77.7927 31.9695C77.6914 29.9075 77.5732 27.8623 77.4211 25.8505C77.3198 24.4591 77.2184 23.1012 77.1002 21.76C76.3739 13.4617 75.4111 6.25308 74.8706 2.5817C74.651 1.10644 73.3842 0 71.8641 0H6.14202C4.63874 0 3.35504 1.10644 3.13546 2.5817C2.61184 6.25308 1.63218 13.4617 0.905872 21.76C0.787636 23.1012 0.686293 24.4759 0.584948 25.8505C0.432931 27.8623 0.314693 29.9075 0.213348 31.9695C0.162676 32.9251 0.095116 35.0206 0.095116 35.1044C-0.0231195 38.6585 -0.0400103 42.1957 0.095116 45.5318C0.162679 47.3424 0.280916 49.0858 0.449824 50.7455C0.500496 51.2987 0.568059 51.8352 0.618731 52.3549C0.753858 53.3775 0.88898 54.3666 1.05789 55.3054C1.31125 56.7304 1.63218 58.0547 2.00377 59.2618C2.42604 60.6197 2.91587 61.8099 3.50705 62.799C8.62496 71.5835 28.7588 83 38.9777 83C49.1966 83 69.3304 71.5835 74.4484 62.799C75.0395 61.7932 75.5294 60.6029 75.9516 59.2618C76.3232 58.0547 76.6442 56.7304 76.8975 55.3054C77.0664 54.3666 77.2184 53.3775 77.3367 52.3549C77.4042 51.8352 77.4549 51.2987 77.5056 50.7455C77.6745 49.0858 77.7927 47.3256 77.8603 45.5318C78.0461 42.1957 78.0292 38.6585 77.911 35.1044Z"${add_attribute("fill", fill, 0)}></path></svg>`;
});
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill = "#CACBD6" } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  return `<svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.4936 1.09961C18.7741 1.09961 1.10059 18.7732 1.10059 40.4926C1.10059 62.2121 18.7741 79.8857 40.4936 79.8857C62.2131 79.8857 79.8867 62.2121 79.8867 40.4926C79.8867 18.7732 62.2131 1.09961 40.4936 1.09961ZM40.4936 78.9038C19.3158 78.9038 2.08245 61.6704 2.08245 40.4926C2.08245 19.3149 19.3158 2.08148 40.4936 2.08148C61.6714 2.08148 78.9048 19.3149 78.9048 40.4926C78.9048 61.6704 61.6714 78.9038 40.4936 78.9038Z"${add_attribute("fill", fill, 0)}></path><path d="M40.4928 77.9739C61.1925 77.9739 77.9729 61.1935 77.9729 40.4938C77.9729 19.7941 61.1925 3.01367 40.4928 3.01367C19.7931 3.01367 3.0127 19.7941 3.0127 40.4938C3.0127 61.1935 19.7931 77.9739 40.4928 77.9739Z"${add_attribute("fill", fill, 0)}></path><path d="M40.4934 0C18.1306 0 0 18.1306 0 40.4934C0 62.8562 18.1306 80.9868 40.4934 80.9868C62.8562 80.9868 80.9868 62.8562 80.9868 40.4934C80.9868 18.1306 62.8562 0 40.4934 0ZM40.4934 80.2081C18.5877 80.2081 0.77872 62.3991 0.77872 40.4934C0.77872 18.5877 18.5877 0.77872 40.4934 0.77872C62.3991 0.77872 80.2081 18.5877 80.2081 40.4934C80.2081 62.3991 62.3991 80.2081 40.4934 80.2081Z"${add_attribute("fill", fill, 0)}></path></svg>`;
});
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fill = "#CACBD6" } = $$props;
  let { variant } = $$props;
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  return `${variant === "hexagon" ? `${validate_component(Hexagon, "Hexagon").$$render($$result, { fill }, {}, {})}` : `${variant === "rounded-hexagon" ? `${validate_component(RoundedHexagon, "RoundedHexagon").$$render($$result, { fill }, {}, {})}` : `${variant === "circle" ? `${validate_component(Circle, "Circle").$$render($$result, { fill }, {}, {})}` : `${validate_component(Crest, "Crest").$$render($$result, { fill }, {}, {})}`}`}`}`;
});

export { Badge as B };
//# sourceMappingURL=Badge-a96c14d0.js.map
