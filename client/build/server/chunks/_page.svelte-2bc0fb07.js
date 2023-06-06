import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-69393c21.js';
import { g as dominqueCourses, f as dominiqueSelectedCourse } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-1uzvtlk>.svelte-1uzvtlk{padding:15px 0}.container.svelte-1uzvtlk .dash .content.svelte-1uzvtlk{width:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:flex-start;align-items:flex-start}.container.svelte-1uzvtlk .dash .content .avatar.svelte-1uzvtlk{width:30%;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;border-radius:10px;border:1px solid var(--white-700);background:white}.container.svelte-1uzvtlk .dash .content .avatar .welcome.svelte-1uzvtlk{padding-top:20px}.container.svelte-1uzvtlk .dash .content .avatar .big-bar.svelte-1uzvtlk{width:70%;height:15px;background:var(--black-300);border-radius:10px;margin-top:20px}.container.svelte-1uzvtlk .dash .content .avatar .bars.svelte-1uzvtlk{width:80%;padding-left:0 10%;margin-top:20px}.container.svelte-1uzvtlk .dash .content .avatar .bars .bar.svelte-1uzvtlk{width:100%;height:10px;background:var(--white-900);margin:10px 0;border-radius:10px}.container.svelte-1uzvtlk .dash .content .cards.svelte-1uzvtlk{width:50%;margin:0px 20px}.container.svelte-1uzvtlk .dash .content .cards .card.svelte-1uzvtlk{height:30%;width:100%;padding:15px;background:white;border-radius:10px;box-sizing:border-box;margin-bottom:20px;border:1px solid var(--white-700);display:flex;align-items:center;align-content:center}.container.svelte-1uzvtlk .dash .content .cards .card .pic.svelte-1uzvtlk{height:100px;width:100px;background:var(--white-700);border-radius:10px}.container.svelte-1uzvtlk .dash .content .cards .card .bars.svelte-1uzvtlk{padding:0 12.5px;width:calc(100% - 115px)}.container.svelte-1uzvtlk .dash .content .cards .card .bars .bar.svelte-1uzvtlk{width:100%;height:12.5px;border-radius:10px;background:var(--white-900);margin:15px 10px}.container.svelte-1uzvtlk .dash .content .cards .card .bars .bar.svelte-1uzvtlk:nth-of-type(1){width:70%}.container.svelte-1uzvtlk .dash .content .cards .card .bars .bar.svelte-1uzvtlk:nth-of-type(3){width:40%}.container.svelte-1uzvtlk .dash .content .share.svelte-1uzvtlk{width:35%;padding:20px;background:white;border:1px solid var(--white-700);border-radius:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1uzvtlk .dash .content .share .header.svelte-1uzvtlk,.container.svelte-1uzvtlk .dash .content .share img.svelte-1uzvtlk,.container.svelte-1uzvtlk .dash .content .share .issued-by.svelte-1uzvtlk{padding-bottom:15px}.container.svelte-1uzvtlk .dash .content .share .credential.svelte-1uzvtlk{width:100%}.container.svelte-1uzvtlk .dash .content .share img.svelte-1uzvtlk{height:100px}.modal-content.svelte-1uzvtlk.svelte-1uzvtlk{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1uzvtlk>.svelte-1uzvtlk{padding:20px 0}.modal-content.svelte-1uzvtlk img.svelte-1uzvtlk{height:80px;padding-bottom:20px}.modal-content.svelte-1uzvtlk .subtext.svelte-1uzvtlk{width:100%}.modal-content.svelte-1uzvtlk .checked.svelte-1uzvtlk{height:60px}.button.svelte-1uzvtlk.svelte-1uzvtlk{border:none;background:var(--open-jobs-blue-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.svelte-1uzvtlk.svelte-1uzvtlk:hover{cursor:pointer;background:var(--blue-900)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-1uzvtlk"}"><div class="${"heading svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You\u2019re all ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `logged in to the Open Jobs Network.`;
          }
        })} Now, share your credential
			with potential employers.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the share credential button to share your credential on your Open Jobs Network profile.`;
      }
    })}</div>
	${validate_component(Modal, "Modal").$$render(
      $$result,
      { isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-content svelte-1uzvtlk"}"><img src="${"/imgs/openjobs.png"}" alt="${""}" class="${"logo svelte-1uzvtlk"}">
			${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape("Allow the Open Jobs Network to share your credential ")}`;
            }
          })}
			<div class="${"p svelte-1uzvtlk"}">${escape("In your mobile wallet accept the request to share the credentials with Open Jobs Network to get share your credentials to employers.")}</div>
			${`${validate_component(Loading, "Loading").$$render($$result, { img: "/imgs/blue-loading.png" }, {}, {})}`}
			<div class="${"subtext svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape("Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"dash svelte-1uzvtlk"}">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"content svelte-1uzvtlk"}"><div class="${"avatar svelte-1uzvtlk"}">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            variant: "small",
            image: "/imgs/dominique.png"
          },
          {},
          {}
        )}
					<div class="${"welcome svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Welcome, Dominique Veritas`;
          }
        })}</div>
					<div class="${"big-bar svelte-1uzvtlk"}"></div>

					<div class="${"bars svelte-1uzvtlk"}"><div class="${"bar svelte-1uzvtlk"}"></div>
						<div class="${"bar svelte-1uzvtlk"}"></div>
						<div class="${"bar svelte-1uzvtlk"}"></div></div></div>

				<div class="${"cards svelte-1uzvtlk"}"><div class="${"card svelte-1uzvtlk"}"><div class="${"pic svelte-1uzvtlk"}"></div>
						<div class="${"bars svelte-1uzvtlk"}"><div class="${"bar svelte-1uzvtlk"}"></div>
							<div class="${"bar svelte-1uzvtlk"}"></div>
							<div class="${"bar svelte-1uzvtlk"}"></div></div></div>

					<div class="${"card svelte-1uzvtlk"}"><div class="${"pic svelte-1uzvtlk"}"></div>
						<div class="${"bars svelte-1uzvtlk"}"><div class="${"bar svelte-1uzvtlk"}"></div>
							<div class="${"bar svelte-1uzvtlk"}"></div>
							<div class="${"bar svelte-1uzvtlk"}"></div></div></div>

					<div class="${"card svelte-1uzvtlk"}"><div class="${"pic svelte-1uzvtlk"}"></div>
						<div class="${"bars svelte-1uzvtlk"}"><div class="${"bar svelte-1uzvtlk"}"></div>
							<div class="${"bar svelte-1uzvtlk"}"></div>
							<div class="${"bar svelte-1uzvtlk"}"></div></div></div></div>

				<div class="${"share svelte-1uzvtlk"}"><div class="${"header svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Your Latest Credentials`;
          }
        })}</div>
					<img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-1uzvtlk"}">
					<div class="${"credential svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)}`;
          }
        })}</div>
					<div class="${"issued-by svelte-1uzvtlk"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Issued by Konning Willem 1 College`;
          }
        })}</div>
					<button class="${"button svelte-1uzvtlk"}">Share Credential</button></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2bc0fb07.js.map
