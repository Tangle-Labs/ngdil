import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape } from './index-78a5ef04.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { M as Modal } from './Modal-b22cf575.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-69393c21.js';
import { g as dominqueCourses, f as dominiqueSelectedCourse } from './flows.store-b2e554df.js';
import './Card-10be3654.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-164lier>.svelte-164lier{padding:15px 0}.container.svelte-164lier .dash .content.svelte-164lier{width:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:flex-start;align-items:flex-start}.container.svelte-164lier .dash .content .avatar.svelte-164lier{width:30%;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;border-radius:10px;border:1px solid var(--black-300);background:white}.container.svelte-164lier .dash .content .avatar .welcome.svelte-164lier{padding-top:20px}.container.svelte-164lier .dash .content .avatar .big-bar.svelte-164lier{width:70%;height:15px;background:var(--black-300);border-radius:10px;margin-top:20px}.container.svelte-164lier .dash .content .avatar .bars.svelte-164lier{width:80%;padding-left:0 10%;margin-top:20px}.container.svelte-164lier .dash .content .avatar .bars .bar.svelte-164lier{width:100%;height:10px;background:var(--white-900);margin:10px 0;border-radius:10px}.container.svelte-164lier .dash .content .cards.svelte-164lier{width:50%;margin:0px 20px}.container.svelte-164lier .dash .content .cards img.svelte-164lier,.container.svelte-164lier .dash .content .cards .issued-by.svelte-164lier{padding-bottom:15px}.container.svelte-164lier .dash .content .cards .card.svelte-164lier{height:30%;width:100%;padding:15px;background:white;border-radius:10px;box-sizing:border-box;margin-bottom:20px;border:1px solid var(--black-300);display:flex;align-items:center;align-content:center}.container.svelte-164lier .dash .content .cards .card.card-1.svelte-164lier{flex-wrap:wrap}.container.svelte-164lier .dash .content .cards .card.card-1 .details.svelte-164lier{display:flex;padding:10px 0;align-items:center;align-content:center}.container.svelte-164lier .dash .content .cards .card.card-1 .details .logo.svelte-164lier{width:80px}.container.svelte-164lier .dash .content .cards .card .pic.svelte-164lier{height:100px;width:100px;background:var(--white-700);border-radius:10px}.container.svelte-164lier .dash .content .cards .card .bars.svelte-164lier{padding:0 15px;width:calc(100% - 115px)}.container.svelte-164lier .dash .content .cards .card .bars .bar.svelte-164lier{width:100%;height:12.5px;border-radius:10px;background:var(--white-900);margin:10px 0}.container.svelte-164lier .dash .content .cards .card .bars .bar.svelte-164lier:nth-of-type(1){width:70%}.container.svelte-164lier .dash .content .cards .card .bars .bar.svelte-164lier:nth-of-type(3){width:40%}.container.svelte-164lier .dash .content .share.svelte-164lier{width:35%;padding:20px;background:white;border:1px solid var(--black-300);border-radius:10px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-164lier .dash .content .share .credential.svelte-164lier{width:100%}.container.svelte-164lier .dash .content .share img.svelte-164lier{height:80px;padding:15px 0}.modal-content.svelte-164lier.svelte-164lier{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-164lier>.svelte-164lier{padding:10px 0}.modal-content.svelte-164lier .subtext.svelte-164lier{width:100%}.modal-content.svelte-164lier .heading.svelte-164lier{text-align:left;width:100%}.modal-content.svelte-164lier .message.svelte-164lier{text-align:left}.button.svelte-164lier.svelte-164lier{border:none;background:var(--open-jobs-blue-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;padding:10px;margin-bottom:0;transition:0.5s all}.button.svelte-164lier.svelte-164lier:hover{cursor:pointer;background:var(--blue-900)}",
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
    $$rendered = `<div class="${"container svelte-164lier"}"><div class="${"heading svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `shared your credential`;
          }
        })} and an interested employer has messaged you
			after seeing your skills.`;
      }
    })}</div>
	<div class="${"sub-text svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click view message to see what the employer has to say.`;
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
          return `<div class="${"modal-content svelte-164lier"}"><div class="${"heading svelte-164lier"}">${validate_component(Typography, "Typography").$$render(
            $$result,
            {
              variant: "card-header",
              color: "--open-jobs-blue-900"
            },
            {},
            {
              default: () => {
                return `from Big Business Corp.`;
              }
            }
          )}</div>
			<div class="${"message svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `Hi Dominique <br><br>

					Congratulations on your new qualification. <br><br>

					We saw your skills on your profile and would like to invite you to apply for a role at the
					Big Business Corp.
					<br><br>
					Looking forward to your application. <br><br>

					Regards <br> Dasha Bloomberg
				`;
            }
          })}</div>
			<button class="${"button svelte-164lier"}">CONTINUE</button>
			<div class="${"subtext svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Click continue to proceed`;
            }
          })}</div></div>`;
        }
      }
    )}
	<div class="${"dash svelte-164lier"}">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="${"content svelte-164lier"}"><div class="${"avatar svelte-164lier"}">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            variant: "small",
            image: "/imgs/dominique.png"
          },
          {},
          {}
        )}
					<div class="${"welcome svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Welcome, Dominique Veritas`;
          }
        })}</div>

					<div class="${"big-bar svelte-164lier"}"></div>
					<div class="${"bars svelte-164lier"}"><div class="${"bar svelte-164lier"}"></div>
						<div class="${"bar svelte-164lier"}"></div>
						<div class="${"bar svelte-164lier"}"></div></div></div>

				<div class="${"cards svelte-164lier"}"><div class="${"card card-1 svelte-164lier"}"><div class="${"sub-text"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Dominique Veritas just shared a new credential`;
          }
        })}</div>
						<div class="${"details svelte-164lier"}"><img src="${"/imgs/kw1c-white.png"}" class="${"logo svelte-164lier"}" alt="${""}">
							<div class="${"text"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)}`;
          }
        })}</div>
								<div class="${"sub-text"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Issued by Konning Willem 1 College`;
          }
        })}</div></div></div></div>

					<div class="${"card svelte-164lier"}"><div class="${"pic svelte-164lier"}"></div>
						<div class="${"bars svelte-164lier"}"><div class="${"bar svelte-164lier"}"></div>
							<div class="${"bar svelte-164lier"}"></div>
							<div class="${"bar svelte-164lier"}"></div></div></div>

					<div class="${"card svelte-164lier"}"><div class="${"pic svelte-164lier"}"></div>
						<div class="${"bars svelte-164lier"}"><div class="${"bar svelte-164lier"}"></div>
							<div class="${"bar svelte-164lier"}"></div>
							<div class="${"bar svelte-164lier"}"></div></div></div></div>

				<div class="${"share svelte-164lier"}"><div class="${"credential svelte-164lier"}">${validate_component(Typography, "Typography").$$render(
          $$result,
          {
            variant: "card-header",
            color: "--open-jobs-blue-900"
          },
          {},
          {
            default: () => {
              return `Your Messages`;
            }
          }
        )}</div>
					<img src="${"/imgs/inbox.png"}" alt="${""}" class="${"logo svelte-164lier"}">
					<div class="${"credential svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `You have a new message`;
          }
        })}</div>
					<div class="${"issued-by svelte-164lier"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `from Big Business Corp.`;
          }
        })}</div>
					<button class="${"button svelte-164lier"}">View Message</button></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-532f06f8.js.map
