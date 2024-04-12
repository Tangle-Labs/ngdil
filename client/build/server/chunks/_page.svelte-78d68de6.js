import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './ssr-b8a31716.js';
import './client-d87046c3.js';
import { T as Typography } from './Typography-5ee1c822.js';
import { M as Modal } from './Modal-de587996.js';
import { A as Avatar } from './Avatar-85141636.js';
import { H as Highlight } from './Highlight-5a5efe33.js';
import { O as OpenJobsNetwork } from './OpenJobsNetwork-c91b6749.js';
import { h as dominqueCourses, g as dominiqueSelectedCourse } from './flows.store-656655d6.js';
import './exports-4ef2d035.js';
import './Card-cff9afa0.js';
import './index2-4d17d163.js';
import './index-5ffffdb5.js';

const css = {
  code: ".container.svelte-1ib1ubu>.svelte-1ib1ubu{padding:15px 0}.container.svelte-1ib1ubu .dash .content.svelte-1ib1ubu{width:100%;padding:40px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:flex-start;align-items:flex-start}.container.svelte-1ib1ubu .dash .content .avatar.svelte-1ib1ubu{width:25%;display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;justify-content:center;text-align:center;padding:20px;box-sizing:border-box;border-radius:20px;border:1px solid var(--white-700);background:white}.container.svelte-1ib1ubu .dash .content .avatar .welcome.svelte-1ib1ubu{padding-top:20px}.container.svelte-1ib1ubu .dash .content .avatar .big-bar.svelte-1ib1ubu{width:70%;height:15px;background:var(--black-300);border-radius:10px;margin-top:20px}.container.svelte-1ib1ubu .dash .content .avatar .bars.svelte-1ib1ubu{width:80%;padding-left:0 10%;margin-top:20px}.container.svelte-1ib1ubu .dash .content .avatar .bars .bar.svelte-1ib1ubu{width:100%;height:10px;background:var(--white-900);margin:30px 0;border-radius:10px}.container.svelte-1ib1ubu .dash .content .avatar .bars .bar.svelte-1ib1ubu:nth-of-type(2){width:80%}.container.svelte-1ib1ubu .dash .content .avatar .bars .bar.svelte-1ib1ubu:nth-of-type(4){width:70%}.container.svelte-1ib1ubu .dash .content .cards.svelte-1ib1ubu{width:40%;margin:0px 20px}.container.svelte-1ib1ubu .dash .content .cards img.svelte-1ib1ubu,.container.svelte-1ib1ubu .dash .content .cards .issued-by.svelte-1ib1ubu{padding-bottom:15px}.container.svelte-1ib1ubu .dash .content .cards .card.svelte-1ib1ubu{height:30%;width:100%;padding:20px 30px;background:white;border-radius:20px;box-sizing:border-box;margin-bottom:20px;border:1px solid var(--white-700);display:flex;align-items:center;align-content:center}.container.svelte-1ib1ubu .dash .content .cards .card.card-1.svelte-1ib1ubu{flex-wrap:wrap}.container.svelte-1ib1ubu .dash .content .cards .card.card-1 .details.svelte-1ib1ubu{display:flex;padding:10px 0;align-items:center;align-content:center}.container.svelte-1ib1ubu .dash .content .cards .card.card-1 .details .logo.svelte-1ib1ubu{width:80px}.container.svelte-1ib1ubu .dash .content .cards .card .pic.svelte-1ib1ubu{height:80px;width:100px;background:var(--white-700);border-radius:10px}.container.svelte-1ib1ubu .dash .content .cards .card .bars.svelte-1ib1ubu{padding:0 15px;width:calc(100% - 115px)}.container.svelte-1ib1ubu .dash .content .cards .card .bars .bar.svelte-1ib1ubu{width:100%;height:12.5px;border-radius:10px;background:var(--black-300);margin:15px 0}.container.svelte-1ib1ubu .dash .content .cards .card .bars .bar.svelte-1ib1ubu:nth-of-type(1){width:70%}.container.svelte-1ib1ubu .dash .content .cards .card .bars .bar.svelte-1ib1ubu:nth-of-type(3){width:40%}.container.svelte-1ib1ubu .dash .content .share.svelte-1ib1ubu{width:25%;padding:20px;background:white;border:1px solid var(--white-700);border-radius:20px;display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1ib1ubu .dash .content .share .credential.svelte-1ib1ubu{width:100%}.container.svelte-1ib1ubu .dash .content .share img.svelte-1ib1ubu{height:80px;padding:15px 0}.container.svelte-1ib1ubu .dash .content .share .button.svelte-1ib1ubu{margin-top:30px;margin-bottom:50px}.modal-content.svelte-1ib1ubu.svelte-1ib1ubu{width:400px;background:white;display:flex;flex-wrap:wrap;padding:30px;box-sizing:border-box;justify-content:center;text-align:center}.modal-content.svelte-1ib1ubu>.svelte-1ib1ubu{padding:10px 0}.modal-content.svelte-1ib1ubu .subtext.svelte-1ib1ubu{width:100%}.modal-content.svelte-1ib1ubu .heading.svelte-1ib1ubu{text-align:left;width:100%}.modal-content.svelte-1ib1ubu .message.svelte-1ib1ubu{text-align:left}.button.svelte-1ib1ubu.svelte-1ib1ubu{border:none;background:var(--open-jobs-blue-900);color:var(--white-300);font-size:var(--button-text-size);width:calc(100% - 40px);margin:20px;box-sizing:border-box;border-radius:40px;font-weight:500;padding:15px;margin-bottom:0;transition:0.5s all}.button.svelte-1ib1ubu.svelte-1ib1ubu:hover{cursor:pointer;background:var(--blue-900)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<style lang=\\"scss\\">.container > * {\\n  padding: 15px 0;\\n}\\n.container .dash .content {\\n  width: 100%;\\n  padding: 40px;\\n  box-sizing: border-box;\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: flex-start;\\n  align-items: flex-start;\\n}\\n.container .dash .content .avatar {\\n  width: 25%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: flex-start;\\n  align-content: flex-start;\\n  justify-content: center;\\n  text-align: center;\\n  padding: 20px;\\n  box-sizing: border-box;\\n  border-radius: 20px;\\n  border: 1px solid var(--white-700);\\n  background: white;\\n}\\n.container .dash .content .avatar .welcome {\\n  padding-top: 20px;\\n}\\n.container .dash .content .avatar .big-bar {\\n  width: 70%;\\n  height: 15px;\\n  background: var(--black-300);\\n  border-radius: 10px;\\n  margin-top: 20px;\\n}\\n.container .dash .content .avatar .bars {\\n  width: 80%;\\n  padding-left: 0 10%;\\n  margin-top: 20px;\\n}\\n.container .dash .content .avatar .bars .bar {\\n  width: 100%;\\n  height: 10px;\\n  background: var(--white-900);\\n  margin: 30px 0;\\n  border-radius: 10px;\\n}\\n.container .dash .content .avatar .bars .bar:nth-of-type(2) {\\n  width: 80%;\\n}\\n.container .dash .content .avatar .bars .bar:nth-of-type(4) {\\n  width: 70%;\\n}\\n.container .dash .content .cards {\\n  width: 40%;\\n  margin: 0px 20px;\\n}\\n.container .dash .content .cards .header,\\n.container .dash .content .cards img,\\n.container .dash .content .cards .issued-by {\\n  padding-bottom: 15px;\\n}\\n.container .dash .content .cards .card {\\n  height: 30%;\\n  width: 100%;\\n  padding: 20px 30px;\\n  background: white;\\n  border-radius: 20px;\\n  box-sizing: border-box;\\n  margin-bottom: 20px;\\n  border: 1px solid var(--white-700);\\n  display: flex;\\n  align-items: center;\\n  align-content: center;\\n}\\n.container .dash .content .cards .card.card-1 {\\n  flex-wrap: wrap;\\n}\\n.container .dash .content .cards .card.card-1 .details {\\n  display: flex;\\n  padding: 10px 0;\\n  align-items: center;\\n  align-content: center;\\n}\\n.container .dash .content .cards .card.card-1 .details .logo {\\n  width: 80px;\\n}\\n.container .dash .content .cards .card .pic {\\n  height: 80px;\\n  width: 100px;\\n  background: var(--white-700);\\n  border-radius: 10px;\\n}\\n.container .dash .content .cards .card .bars {\\n  padding: 0 15px;\\n  width: calc(100% - 115px);\\n}\\n.container .dash .content .cards .card .bars .bar {\\n  width: 100%;\\n  height: 12.5px;\\n  border-radius: 10px;\\n  background: var(--black-300);\\n  margin: 15px 0;\\n}\\n.container .dash .content .cards .card .bars .bar:nth-of-type(1) {\\n  width: 70%;\\n}\\n.container .dash .content .cards .card .bars .bar:nth-of-type(3) {\\n  width: 40%;\\n}\\n.container .dash .content .share {\\n  width: 25%;\\n  padding: 20px;\\n  background: white;\\n  border: 1px solid var(--white-700);\\n  border-radius: 20px;\\n  display: flex;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  text-align: center;\\n}\\n.container .dash .content .share .credential {\\n  width: 100%;\\n}\\n.container .dash .content .share img {\\n  height: 80px;\\n  padding: 15px 0;\\n}\\n.container .dash .content .share .button {\\n  margin-top: 30px;\\n  margin-bottom: 50px;\\n}\\n\\n.modal-content {\\n  width: 400px;\\n  background: white;\\n  display: flex;\\n  flex-wrap: wrap;\\n  padding: 30px;\\n  box-sizing: border-box;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.modal-content > * {\\n  padding: 10px 0;\\n}\\n.modal-content img {\\n  height: 120px;\\n}\\n.modal-content .subtext {\\n  width: 100%;\\n}\\n.modal-content .checked {\\n  height: 60px;\\n}\\n.modal-content .heading {\\n  text-align: left;\\n  width: 100%;\\n}\\n.modal-content .message {\\n  text-align: left;\\n}\\n\\n.button {\\n  border: none;\\n  background: var(--open-jobs-blue-900);\\n  color: var(--white-300);\\n  font-size: var(--button-text-size);\\n  width: calc(100% - 40px);\\n  margin: 20px;\\n  box-sizing: border-box;\\n  border-radius: 40px;\\n  font-weight: 500;\\n  padding: 15px;\\n  margin-bottom: 0;\\n  transition: 0.5s all;\\n}\\n.button:hover {\\n  cursor: pointer;\\n  background: var(--blue-900);\\n}</style>\\n\\n<script lang=\\"ts\\">import { goto } from \\"$app/navigation\\";\\nimport { Typography, OpenJobsNetwork, Avatar, Modal, Loading } from \\"$lib/components\\";\\nimport Highlight from \\"$lib/components/ui/Highlight/Highlight.svelte\\";\\nimport { currNode, dominiqueSelectedCourse, dominqueCourses } from \\"$lib/stores/flows.store\\";\\nimport { onMount } from \\"svelte\\";\\nlet showModal = false;\\nonMount(() => {\\n    currNode.set(2);\\n});\\n<\/script>\\n\\n<div class=\\"container\\">\\n\\t<div class=\\"heading\\">\\n\\t\\t<Typography variant=\\"heading\\"\\n\\t\\t\\t>You <Highlight>shared your credential</Highlight> and an interested employer has messaged you\\n\\t\\t\\tafter seeing your skills.</Typography>\\n\\t</div>\\n\\t<div class=\\"sub-text\\">\\n\\t\\t<Typography>Click view message to see what the employer has to say.</Typography>\\n\\t</div>\\n\\t<Modal bind:isOpen=\\"{showModal}\\" borderRadius=\\"{16}\\">\\n\\t\\t<div class=\\"modal-content\\">\\n\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t<Typography variant=\\"card-header\\" color=\\"--bbc-blue\\">from Big Business Corp.</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"message\\">\\n\\t\\t\\t\\t<Typography>\\n\\t\\t\\t\\t\\tHi Dominique <br /><br />\\n\\n\\t\\t\\t\\t\\tCongratulations on your new qualification. <br /><br />\\n\\n\\t\\t\\t\\t\\tWe saw your skills on your profile and would like to\\n\\t\\t\\t\\t\\t<b>invite you to apply for a role at the Big Business Corp.</b>\\n\\t\\t\\t\\t\\t<br /><br />\\n\\t\\t\\t\\t\\tLooking forward to your application. <br /><br />\\n\\n\\t\\t\\t\\t\\tRegards <br /> Dasha Bloomberg\\n\\t\\t\\t\\t</Typography>\\n\\t\\t\\t</div>\\n\\t\\t\\t<button class=\\"button\\" on:click=\\"{() => goto('/demo/journeys/dominique/shared-cred')}\\"\\n\\t\\t\\t\\t>Continue</button>\\n\\t\\t\\t<div class=\\"subtext\\">\\n\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Click continue to proceed</Typography>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</Modal>\\n\\t<div class=\\"dash\\">\\n\\t\\t<OpenJobsNetwork>\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<div class=\\"avatar\\">\\n\\t\\t\\t\\t\\t<Avatar variant=\\"small\\" image=\\"/imgs/dominique.png\\" />\\n\\t\\t\\t\\t\\t<div class=\\"welcome\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\">Welcome, Dominique Veritas</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"big-bar\\"></div>\\n\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"cards\\">\\n\\t\\t\\t\\t\\t<div class=\\"card card-1\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>Dominique Veritas just shared a new credential</Typography>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"details\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/imgs/kw1c-white.png\\" class=\\"logo\\" alt=\\"\\" />\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"heading\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>{dominqueCourses[$dominiqueSelectedCourse].name} Certificate</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"sub-text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">Issued by Koning Willem I College</Typography>\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"pic\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\"card\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\"pic\\"></div>\\n\\t\\t\\t\\t\\t\\t<div class=\\"bars\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"bar\\"></div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t<div class=\\"share\\">\\n\\t\\t\\t\\t\\t<div class=\\"credential\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"card-header\\">Your Messages</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<img src=\\"/imgs/inbox.png\\" alt=\\"\\" class=\\"logo\\" />\\n\\t\\t\\t\\t\\t<div class=\\"credential\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"button\\" color=\\"--bbc-blue\\">You have a new message</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div class=\\"issued-by\\">\\n\\t\\t\\t\\t\\t\\t<Typography variant=\\"sub-text\\">from Big Business Corp.</Typography>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\tclass=\\"button\\"\\n\\t\\t\\t\\t\\t\\ton:click=\\"{() => {\\n\\t\\t\\t\\t\\t\\t\\tshowModal = true;\\n\\t\\t\\t\\t\\t\\t\\tcurrNode.set(3);\\n\\t\\t\\t\\t\\t\\t}}\\">View Message</button>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</OpenJobsNetwork>\\n\\t</div>\\n</div>\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dominiqueSelectedCourse, $$unsubscribe_dominiqueSelectedCourse;
  $$unsubscribe_dominiqueSelectedCourse = subscribe(dominiqueSelectedCourse, (value) => $dominiqueSelectedCourse = value);
  let showModal = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container svelte-1ib1ubu"><div class="heading svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `shared your credential`;
          }
        })} and an interested employer has messaged you
			after seeing your skills.`;
      }
    })}</div> <div class="sub-text svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
      default: () => {
        return `Click view message to see what the employer has to say.`;
      }
    })}</div> ${validate_component(Modal, "Modal").$$render(
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
          return `<div class="modal-content svelte-1ib1ubu"><div class="heading svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render(
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
          )}</div> <div class="message svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `Hi Dominique <br><br>

					Congratulations on your new qualification. <br><br>

					We saw your skills on your profile and would like to
					<b data-svelte-h="svelte-ncyo7f">invite you to apply for a role at the Big Business Corp.</b> <br><br>
					Looking forward to your application. <br><br>

					Regards <br> Dasha Bloomberg`;
            }
          })}</div> <button class="button svelte-1ib1ubu" data-svelte-h="svelte-1o14e01">Continue</button> <div class="subtext svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `Click continue to proceed`;
            }
          })}</div></div>`;
        }
      }
    )} <div class="dash svelte-1ib1ubu">${validate_component(OpenJobsNetwork, "OpenJobsNetwork").$$render($$result, {}, {}, {
      default: () => {
        return `<div class="content svelte-1ib1ubu"><div class="avatar svelte-1ib1ubu">${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            variant: "small",
            image: "/imgs/dominique.png"
          },
          {},
          {}
        )} <div class="welcome svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `Welcome, Dominique Veritas`;
          }
        })}</div> <div class="big-bar svelte-1ib1ubu"></div> <div class="bars svelte-1ib1ubu" data-svelte-h="svelte-10j1e48"><div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div></div></div> <div class="cards svelte-1ib1ubu"><div class="card card-1 svelte-1ib1ubu"><div class="sub-text">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Dominique Veritas just shared a new credential`;
          }
        })}</div> <div class="details svelte-1ib1ubu"><img src="/imgs/kw1c-white.png" class="logo svelte-1ib1ubu" alt=""> <div class="text"><div class="heading">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
          default: () => {
            return `${escape(dominqueCourses[$dominiqueSelectedCourse].name)} Certificate`;
          }
        })}</div> <div class="sub-text">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `Issued by Koning Willem I College`;
          }
        })}</div></div></div></div> <div class="card svelte-1ib1ubu" data-svelte-h="svelte-1nkjwtk"><div class="pic svelte-1ib1ubu"></div> <div class="bars svelte-1ib1ubu"><div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div></div></div> <div class="card svelte-1ib1ubu" data-svelte-h="svelte-1nkjwtk"><div class="pic svelte-1ib1ubu"></div> <div class="bars svelte-1ib1ubu"><div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div> <div class="bar svelte-1ib1ubu"></div></div></div></div> <div class="share svelte-1ib1ubu"><div class="credential svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Your Messages`;
          }
        })}</div> <img src="/imgs/inbox.png" alt="" class="logo svelte-1ib1ubu"> <div class="credential svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, { variant: "button", color: "--bbc-blue" }, {}, {
          default: () => {
            return `You have a new message`;
          }
        })}</div> <div class="issued-by svelte-1ib1ubu">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
          default: () => {
            return `from Big Business Corp.`;
          }
        })}</div> <button class="button svelte-1ib1ubu" data-svelte-h="svelte-1ytawb6">View Message</button></div></div>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_dominiqueSelectedCourse();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-78d68de6.js.map
