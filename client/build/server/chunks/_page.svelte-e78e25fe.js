import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { T as Typography } from './Typography-011834f4.js';
import { M as Modal } from './Modal-268b07b6.js';
import { A as Avatar } from './Avatar-db3679f9.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-eebcb667.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-72d7210a.js';
import './Card-42d79914.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';

const css = {
  code: ".container.svelte-1ib1ubu>.svelte-1ib1ubu{padding:15px 0}.container.svelte-1ib1ubu .dash .content.svelte-1ib1ubu{width:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:flex-start;align-items:flex-start}.container.svelte-1ib1ubu .dash .content .avatar.svelte-1ib1ubu{width:25%;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;border-radius:20px;border:1px solid var(--white-700);background:white}.container.svelte-1ib1ubu .dash .content .avatar .welcome.svelte-1ib1ubu{padding-top:20px}.container.svelte-1ib1ubu .dash .content .avatar .big-bar.svelte-1ib1ubu{width:70%;height:15px;background:var(--black-300);border-radius:10px;margin-top:20px}.container.svelte-1ib1ubu .dash .content .avatar .bars.svelte-1ib1ubu{width:80%;padding-left:0 10%;margin-top:20px}.container.svelte-1ib1ubu .dash .content .avatar .bars .bar.svelte-1ib1ubu{width:100%;height:10px;background:var(--white-900);margin:30px 0;border-radius:10px}.container.svelte-1ib1ubu .dash .content .avatar .bars .bar.svelte-1ib1ubu:nth-of-type(2){width:80%}.container.svelte-1ib1ubu .dash .content .avatar .bars .bar.svelte-1ib1ubu:nth-of-type(4){width:70%}.container.svelte-1ib1ubu .dash .content .cards.svelte-1ib1ubu{width:40%;margin:0px 20px}.container.svelte-1ib1ubu .dash .content .cards img.svelte-1ib1ubu,.container.svelte-1ib1ubu .dash .content .cards .issued-by.svelte-1ib1ubu{padding-bottom:15px}.container.svelte-1ib1ubu .dash .content .cards .card.svelte-1ib1ubu{height:30%;width:100%;padding:20px 30px;background:white;border-radius:20px;box-sizing:border-box;margin-bottom:20px;border:1px solid var(--white-700);display:flex;align-items:center;align-content:center}.container.svelte-1ib1ubu .dash .content .cards .card.card-1.svelte-1ib1ubu{flex-wrap:wrap}.container.svelte-1ib1ubu .dash .content .cards .card.card-1 .details.svelte-1ib1ubu{display:flex;padding:10px 0;align-items:center;align-content:center}.container.svelte-1ib1ubu .dash .content .cards .card.card-1 .details .logo.svelte-1ib1ubu{width:80px}.container.svelte-1ib1ubu .dash .content .cards .card .pic.svelte-1ib1ubu{height:80px;width:100px;background:var(--white-700);border-radius:10px}.container.svelte-1ib1ubu .dash .content .cards .card .bars.svelte-1ib1ubu{padding:0 15px;width:calc(100% - 115px)}.container.svelte-1ib1ubu .dash .content .cards .card .bars .bar.svelte-1ib1ubu{width:100%;height:12.5px;border-radius:10px;background:var(--black-300);margin:15px 0}.container.svelte-1ib1ubu .dash .content .cards .card .bars .bar.svelte-1ib1ubu:nth-of-type(1){width:70%}.container.svelte-1ib1ubu .dash .content .cards .card .bars .bar.svelte-1ib1ubu:nth-of-type(3){width:40%}.container.svelte-1ib1ubu .dash .content .share.svelte-1ib1ubu{width:25%;padding:20px;background:white;border:1px solid var(--white-700);border-radius:20px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1ib1ubu .dash .content .share .credential.svelte-1ib1ubu{width:100%}.container.svelte-1ib1ubu .dash .content .share img.svelte-1ib1ubu{height:80px;padding:15px 0}.container.svelte-1ib1ubu .dash .content .share .button.svelte-1ib1ubu{margin-top:30px;margin-bottom:50px}.modal-content.svelte-1ib1ubu.svelte-1ib1ubu{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1ib1ubu>.svelte-1ib1ubu{padding:10px 0}.modal-content.svelte-1ib1ubu .subtext.svelte-1ib1ubu{width:100%}.modal-content.svelte-1ib1ubu .heading.svelte-1ib1ubu{text-align:left;width:100%}.modal-content.svelte-1ib1ubu .message.svelte-1ib1ubu{text-align:left}.button.svelte-1ib1ubu.svelte-1ib1ubu{border:none;background:var(--open-jobs-blue-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;font-weight:500;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-1ib1ubu.svelte-1ib1ubu:hover{cursor:pointer;background:var(--blue-900)}",
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
    $$rendered = `<div class="${"container svelte-1ib1ubu"}"><div class="${"heading svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `shared your credential`;
          }
        })} and an interested employer has messaged you
			after seeing your skills.`;
      }
    })}</div>
	<div class="${"sub-text svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click view message to see what the employer has to say.`;
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
          return `<div class="${"modal-content svelte-1ib1ubu"}"><div class="${"heading svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--bbc-blue"
            },
            {},
            {
              default: () => {
                return `from Big Business Corp.`;
              }
            }
          )}</div>
			<div class="${"message svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `Hi Dominique <br><br>

					Congratulations on your new qualification. <br><br>

					We saw your skills on your profile and would like to
					<b>invite you to apply for a role at the Big Business Corp.</b>
					<br><br>
					Looking forward to your application. <br><br>

					Regards <br> Dasha Bloomberg
				`;
            }
          })}</div>
			<button class="${"button svelte-1ib1ubu"}">Continue</button>
			<div class="${"subtext svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Click continue to proceed`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"dash svelte-1ib1ubu"}">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"content svelte-1ib1ubu"}"><div class="${"avatar svelte-1ib1ubu"}">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            variant: "small",
            image: "/imgs/dominique.png"
          },
          {},
          {}
        )}
					<div class="${"welcome svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Welcome, Dominique Veritas`;
          }
        })}</div>

					<div class="${"big-bar svelte-1ib1ubu"}"></div>
					<div class="${"bars svelte-1ib1ubu"}"><div class="${"bar svelte-1ib1ubu"}"></div>
						<div class="${"bar svelte-1ib1ubu"}"></div>
						<div class="${"bar svelte-1ib1ubu"}"></div>
						<div class="${"bar svelte-1ib1ubu"}"></div></div></div>

				<div class="${"cards svelte-1ib1ubu"}"><div class="${"card card-1 svelte-1ib1ubu"}"><div class="${"sub-text"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Dominique Veritas just shared a new credential`;
          }
        })}</div>
						<div class="${"details svelte-1ib1ubu"}"><img src="${"/imgs/kw1c-white.png"}" class="${"logo svelte-1ib1ubu"}" alt="${""}">
							<div class="${"text"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)} Certificate`;
          }
        })}</div>
								<div class="${"sub-text"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Issued by Koning Willem I College`;
          }
        })}</div></div></div></div>

					<div class="${"card svelte-1ib1ubu"}"><div class="${"pic svelte-1ib1ubu"}"></div>
						<div class="${"bars svelte-1ib1ubu"}"><div class="${"bar svelte-1ib1ubu"}"></div>
							<div class="${"bar svelte-1ib1ubu"}"></div>
							<div class="${"bar svelte-1ib1ubu"}"></div></div></div>

					<div class="${"card svelte-1ib1ubu"}"><div class="${"pic svelte-1ib1ubu"}"></div>
						<div class="${"bars svelte-1ib1ubu"}"><div class="${"bar svelte-1ib1ubu"}"></div>
							<div class="${"bar svelte-1ib1ubu"}"></div>
							<div class="${"bar svelte-1ib1ubu"}"></div></div></div></div>

				<div class="${"share svelte-1ib1ubu"}"><div class="${"credential svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Your Messages`;
          }
        })}</div>
					<img src="${"/imgs/inbox.png"}" alt="${""}" class="${"logo svelte-1ib1ubu"}">
					<div class="${"credential svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button", color: "--bbc-blue" }, {}, {
          default: () => {
            return `You have a new message`;
          }
        })}</div>
					<div class="${"issued-by svelte-1ib1ubu"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `from Big Business Corp.`;
          }
        })}</div>
					<button class="${"button svelte-1ib1ubu"}">View Message</button></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e78e25fe.js.map
