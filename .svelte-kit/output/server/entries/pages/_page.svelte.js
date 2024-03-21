import { c as create_ssr_component, d as each, e as escape } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${data.data.length > 0 ? `<ul>${each(data.data, (account) => {
    return `<li>${escape(account.powerlink_id)}</li>`;
  })}</ul>` : `<p data-svelte-h="svelte-lh5bt3">계정 정보를 불러올 수 없습니다!!</p>`}`;
});
export {
  Page as default
};
