import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { M as Modal } from './Modal-268b07b6.js';
import { A as Avatar } from './Avatar-db3679f9.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-eebcb667.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-72d7210a.js';
import './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-1yjsebg>.svelte-1yjsebg{padding:15px 0}.container.svelte-1yjsebg .dash .content.svelte-1yjsebg{width:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:flex-start;align-items:flex-start}.container.svelte-1yjsebg .dash .content .avatar.svelte-1yjsebg{width:25%;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;border-radius:20px;border:1px solid var(--white-700);background:white}.container.svelte-1yjsebg .dash .content .avatar .welcome.svelte-1yjsebg{padding-top:20px}.container.svelte-1yjsebg .dash .content .avatar .big-bar.svelte-1yjsebg{width:70%;height:15px;background:var(--black-300);border-radius:10px;margin-top:20px}.container.svelte-1yjsebg .dash .content .avatar .bars.svelte-1yjsebg{width:80%;padding-left:0 10%;margin-top:20px}.container.svelte-1yjsebg .dash .content .avatar .bars .bar.svelte-1yjsebg{width:100%;height:10px;background:var(--white-900);margin:30px 0;border-radius:10px}.container.svelte-1yjsebg .dash .content .avatar .bars .bar.svelte-1yjsebg:nth-of-type(2){width:80%}.container.svelte-1yjsebg .dash .content .avatar .bars .bar.svelte-1yjsebg:nth-of-type(4){width:70%}.container.svelte-1yjsebg .dash .content .cards.svelte-1yjsebg{width:40%;margin:0px 20px}.container.svelte-1yjsebg .dash .content .cards .card.svelte-1yjsebg{height:30%;width:100%;padding:15px;background:white;border-radius:20px;box-sizing:border-box;margin-bottom:20px;border:1px solid var(--white-700);display:flex;align-items:center;padding:20px 30px;align-content:center}.container.svelte-1yjsebg .dash .content .cards .card .pic.svelte-1yjsebg{height:80px;width:100px;background:var(--white-700);border-radius:10px}.container.svelte-1yjsebg .dash .content .cards .card .bars.svelte-1yjsebg{padding:0 12.5px;width:calc(100% - 115px)}.container.svelte-1yjsebg .dash .content .cards .card .bars .bar.svelte-1yjsebg{width:100%;height:12.5px;border-radius:10px;background:var(--black-300);margin:15px 10px}.container.svelte-1yjsebg .dash .content .cards .card .bars .bar.svelte-1yjsebg:nth-of-type(1){width:70%}.container.svelte-1yjsebg .dash .content .cards .card .bars .bar.svelte-1yjsebg:nth-of-type(3){width:40%}.container.svelte-1yjsebg .dash .content .share.svelte-1yjsebg{width:25%;padding:20px;background:white;border:1px solid var(--white-700);border-radius:20px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1yjsebg .dash .content .share .button.svelte-1yjsebg{margin-bottom:50px}.container.svelte-1yjsebg .dash .content .share .header.svelte-1yjsebg{margin-bottom:20px}.container.svelte-1yjsebg .dash .content .share .header.svelte-1yjsebg,.container.svelte-1yjsebg .dash .content .share img.svelte-1yjsebg,.container.svelte-1yjsebg .dash .content .share .issued-by.svelte-1yjsebg{width:100%;padding-bottom:15px}.container.svelte-1yjsebg .dash .content .share .credential.svelte-1yjsebg{width:100%}.container.svelte-1yjsebg .dash .content .share img.svelte-1yjsebg{height:60px;width:unset}.modal-content.svelte-1yjsebg.svelte-1yjsebg{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1yjsebg>.svelte-1yjsebg{padding:20px 0}.modal-content.svelte-1yjsebg .loading.svelte-1yjsebg{width:100%}.modal-content.svelte-1yjsebg .p.svelte-1yjsebg{color:var(--black-500);font-weight:300}.modal-content.svelte-1yjsebg img.svelte-1yjsebg{height:80px;padding-bottom:20px}.modal-content.svelte-1yjsebg .subtext.svelte-1yjsebg{width:100%}.modal-content.svelte-1yjsebg .checked.svelte-1yjsebg{height:60px}.button.svelte-1yjsebg.svelte-1yjsebg{border:none;background:var(--open-jobs-blue-900);color:var(--white-300);font-size:1.15rem;width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:15px;font-weight:500;margin-bottom:0;transition:0.5s all}.button.svelte-1yjsebg.svelte-1yjsebg:hover{cursor:pointer;background:var(--blue-900)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let receivedCreds = false;
  const ws = createWebsocket();
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.received) {
      receivedCreds = true;
    }
  };
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-1yjsebg"}"><div class="${"heading svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You’re all ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `logged in to the Open Jobs Network.`;
          }
        })} Now, share your credential
			with potential employers.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click the share credential button to share your credential on your Open Jobs Network profile.`;
      }
    })}</div>
	${validate_component(Modal, "Modal").$$render(
      $$result,
      { borderRadius: 16, isOpen: showModal },
      {
        isOpen: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"modal-content svelte-1yjsebg"}"><img src="${"/imgs/openjobs.png"}" alt="${""}" class="${"logo svelte-1yjsebg"}">
			${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `${escape(receivedCreds ? "The Open Jobs Network has received your confirmation to share your credential!" : "Allow the Open Jobs Network to share your credential ")}`;
              }
            }
          )}
			<div class="${"p svelte-1yjsebg"}">${escape(receivedCreds ? "You may continue further in the browser. " : "In your mobile wallet scan the QR and accept the request to share the credentials with Open Jobs Network to get share your credentials to employers.")}</div>
			${receivedCreds ? `<img class="${"checked svelte-1yjsebg"}" src="${"/imgs/open-jobs-check.png"}" alt="${""}">
				<button class="${"button svelte-1yjsebg"}">Continue</button>` : `${``}`}
			<div class="${"subtext svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(receivedCreds ? "Click continue to proceed" : "Waiting for credentials")}`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"dash svelte-1yjsebg"}">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"content svelte-1yjsebg"}"><div class="${"avatar svelte-1yjsebg"}">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            variant: "small",
            image: "/imgs/dominique.png"
          },
          {},
          {}
        )}
					<div class="${"welcome svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Welcome, Dominique Veritas`;
          }
        })}</div>
					<div class="${"big-bar svelte-1yjsebg"}"></div>

					<div class="${"bars svelte-1yjsebg"}"><div class="${"bar svelte-1yjsebg"}"></div>
						<div class="${"bar svelte-1yjsebg"}"></div>
						<div class="${"bar svelte-1yjsebg"}"></div>
						<div class="${"bar svelte-1yjsebg"}"></div></div></div>

				<div class="${"cards svelte-1yjsebg"}"><div class="${"card svelte-1yjsebg"}"><div class="${"pic svelte-1yjsebg"}"></div>
						<div class="${"bars svelte-1yjsebg"}"><div class="${"bar svelte-1yjsebg"}"></div>
							<div class="${"bar svelte-1yjsebg"}"></div>
							<div class="${"bar svelte-1yjsebg"}"></div></div></div>

					<div class="${"card svelte-1yjsebg"}"><div class="${"pic svelte-1yjsebg"}"></div>
						<div class="${"bars svelte-1yjsebg"}"><div class="${"bar svelte-1yjsebg"}"></div>
							<div class="${"bar svelte-1yjsebg"}"></div>
							<div class="${"bar svelte-1yjsebg"}"></div></div></div>

					<div class="${"card svelte-1yjsebg"}"><div class="${"pic svelte-1yjsebg"}"></div>
						<div class="${"bars svelte-1yjsebg"}"><div class="${"bar svelte-1yjsebg"}"></div>
							<div class="${"bar svelte-1yjsebg"}"></div>
							<div class="${"bar svelte-1yjsebg"}"></div></div></div></div>

				<div class="${"share svelte-1yjsebg"}"><div class="${"header svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "list" }, {}, {
          default: () => {
            return `Your Latest Credentials`;
          }
        })}</div>
					<img src="${"/imgs/kw1c-white.png"}" alt="${""}" class="${"logo svelte-1yjsebg"}">
					<div class="${"credential svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)}`;
          }
        })}</div>
					<div class="${"issued-by svelte-1yjsebg"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Issued by<br> Koning Willem I College`;
          }
        })}</div>
					<button class="${"button svelte-1yjsebg"}">Share Credential</button></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1a65fd93.js.map
