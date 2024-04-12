import { c as create_ssr_component, f as subscribe, v as validate_component, e as escape } from './index2-d11f8066.js';
import { g as goto } from './navigation-c0e6e626.js';
import { B as Button } from './Button-925970aa.js';
import { C as Card } from './Card-42d79914.js';
import { M as Modal } from './Modal-268b07b6.js';
import { A as Avatar } from './Avatar-db3679f9.js';
import { T as Typography } from './Typography-011834f4.js';
import { L as Loading } from './Loading-20941ed8.js';
import { H as Highlight } from './Highlight-f16b59ea.js';
import { Q as Qr } from './Qr-59f9ff74.js';
import { b as completedJourneys, c as currentJourney } from './flows.store-72d7210a.js';
import { c as currStep } from './onboarding.store-7316f7a3.js';
import { a as apiClient } from './axios.utils-acadfc84.js';
import { c as createWebsocket } from './ws.util-8a542ab8.js';
import './index3-4f501ff7.js';
import './index-2761d4cc.js';
import 'axios';

const css = {
  code: ".container.svelte-1rt6gg5.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-1rt6gg5>.svelte-1rt6gg5.svelte-1rt6gg5{padding:20px 0}.container.svelte-1rt6gg5 .desc.svelte-1rt6gg5.svelte-1rt6gg5{padding-bottom:5px;width:100%}.container.svelte-1rt6gg5 .sub-title.svelte-1rt6gg5.svelte-1rt6gg5{padding-top:0;width:100%}.container.svelte-1rt6gg5 .cards.svelte-1rt6gg5.svelte-1rt6gg5{width:100%}.container.svelte-1rt6gg5 .cards.svelte-1rt6gg5>.card.svelte-1rt6gg5{width:100%;padding:10px 0}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:space-between;align-items:center;text-align:left}.container.svelte-1rt6gg5 .cards>.card .card-content .text.svelte-1rt6gg5.svelte-1rt6gg5{width:calc(100% - 300px)}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5>.svelte-1rt6gg5{margin-right:20px}.container.svelte-1rt6gg5 .cards>.card .card-content.svelte-1rt6gg5>.svelte-1rt6gg5:last-of-type{margin-right:0}.container.svelte-1rt6gg5>.heading.svelte-1rt6gg5.svelte-1rt6gg5,.container.svelte-1rt6gg5>.desc.svelte-1rt6gg5.svelte-1rt6gg5{width:40vw}.modal-content.svelte-1rt6gg5.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;transition:all 0.5s;padding-bottom:30px}.modal-content.svelte-1rt6gg5>.svelte-1rt6gg5>.svelte-1rt6gg5{padding:20px}.modal-content.svelte-1rt6gg5>.svelte-1rt6gg5>.p.svelte-1rt6gg5{padding:10px 20px}.modal-content.svelte-1rt6gg5 .left.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;flex-wrap:wrap;justify-content:center;max-width:400px}.modal-content.svelte-1rt6gg5 .right.svelte-1rt6gg5.svelte-1rt6gg5{display:flex;justify-content:center;width:400px;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;text-align:center;padding:10px 20px}.modal-content.svelte-1rt6gg5 .right .sub-text.svelte-1rt6gg5.svelte-1rt6gg5{padding:0px 20px;width:100%;padding-bottom:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let journey;
  let $completedJourneys, $$unsubscribe_completedJourneys;
  $$unsubscribe_completedJourneys = subscribe(completedJourneys, (value) => $completedJourneys = value);
  let qr;
  const journeys = {
    dominique: {
      heading: "Meet Dominique! A student enrolling at KW1 College, NL.",
      p1: "Dominique has just left school and is looking to enrol at Koning Willem I College to study and obtain a Diploma.",
      p2: "Using their self-sovereign identity, help Dominique enrol at college, earn a course credential, share that credential with potential employers, and apply for a new job.",
      img: "/imgs/dominique.png"
    },
    peter: {
      heading: "Meet Peter! A college enrolment officer at KW1 College, NL.",
      p1: "Peter is an enrolment officer at Koning Willem I College looking to support students with their training and enrolment on international internship experiences.",
      p2: "Using self-sovereign identity, help Peter evaluate student internship eligibility, enrol students on internationalisation course, issue course badges, assign internship placements, and verify student completion of internships on their return from their international placements.",
      img: "/imgs/peter.png"
    },
    imani: {
      heading: "Meet Imani! A corporate HR manager at Future Tech Co.",
      p1: "Imani is in charge of the hiring and training of staff at the Future Tech Co. where she employs and developers the company workforce.",
      p2: "Using self-sovereign identity, help Imani in the hiring of new employees, issuing of company ID, creation of internal open badges, and the training and issuing of open badges to employees who successfully completed the company course training.",
      img: "/imgs/imani.png"
    }
  };
  let isOpen = false;
  let selectedJourney = null;
  let qrVisible = false;
  let buttonVisible = false;
  apiClient.get("/");
  function watchQr(qr2) {
    if (!qr2)
      return;
    const ws = createWebsocket();
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.creds) {
        buttonVisible = true;
      }
    };
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      watchQr(qr);
    }
    journey = selectedJourney && journeys[selectedJourney];
    $$rendered = `<div class="${"modal"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        withBorder: true,
        borderRadius: "8",
        isOpen
      },
      {
        isOpen: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${journey ? `<div class="${"modal-content svelte-1rt6gg5"}"><div class="${"left svelte-1rt6gg5"}"><div class="${"avatar svelte-1rt6gg5"}">${validate_component(Avatar, "Avatar").$$render($$result, { variant: "large", image: journey.img }, {}, {})}</div>
					<div class="${"heading svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(journey.heading)}`;
            }
          })}</div>
					<div class="${"p svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(journey.p1)}`;
            }
          })}</div>
					<div class="${"p svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(journey.p2)}`;
            }
          })}</div>
					${!qrVisible ? `<div class="${"button svelte-1rt6gg5"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "white",
              label: "Continue",
              onClick: () => {
                currStep.set(4);
                if (selectedJourney)
                  currentJourney.set(selectedJourney);
                qrVisible = true;
              }
            },
            {},
            {}
          )}</div>` : ``}</div>
				${qrVisible ? `<div class="${"right svelte-1rt6gg5"}">${qr ? `${validate_component(Qr, "Qr").$$render($$result, { size: 200, data: qr }, {}, {})}` : ``}
						<div class="${"scan-header svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? "Your credentials are confirmed!" : "Scan QR code to connect to NGDIL & receive your credentials.")}`;
            }
          })}</div>
						<div class="${"sub-text svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? `Click to begin ${selectedJourney}'s journey.` : `In your mobile wallet, scan the QR code to connect to NGDIL, then accept receipt of ${selectedJourney}’s verifiable credentials.`)}`;
            }
          })}</div>

						${buttonVisible ? `${validate_component(Button, "Button").$$render(
            $$result,
            {
              label: `Start ${selectedJourney}'s Journey`,
              onClick: () => {
                goto(`/demo/journeys/${selectedJourney}`);
              },
              variant: "secondary"
            },
            {},
            {}
          )}` : `${validate_component(Loading, "Loading").$$render($$result, { size: "30px" }, {}, {})}`}</div>` : ``}</div>` : ``}`;
        }
      }
    )}</div>
<div class="${"container svelte-1rt6gg5"}"><div class="${"heading svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `${$completedJourneys.length === 0 ? `
				You’re all set! ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Let’s choose the user journey`;
          }
        })} you would like to explore
				first` : `
				Welcome back! ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Choose the user journey`;
          }
        })} you would like to explore next.`}`;
      }
    })}</div>
	<div class="${"desc svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
      default: () => {
        return `Click the get started button to select the journey you would like to experience.
		`;
      }
    })}</div>
	<div class="${"sub-title svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
      default: () => {
        return `(It is recommended to experience the student journey first.)
		`;
      }
    })}</div>
	<div class="${"cards svelte-1rt6gg5"}"><div class="${"card svelte-1rt6gg5"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: "8" }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-1rt6gg5"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique.png" }, {}, {})}
					<div class="${"text svelte-1rt6gg5"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Dominique Veritas`;
          }
        })}</div>
						<div class="${"desc svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Dominique is a school graduate, excited to enrol as a student at Koning Willem I
								College.`;
          }
        })}</div></div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: $completedJourneys.includes("dominique") ? "completed" : "secondary",
            onClick: async () => {
              selectedJourney = "dominique";
              currStep.set(3);
              const { data } = await apiClient.post("/api/starting-offer", {
                credentials: [
                  "National ID",
                  "School Course Certificate",
                  "Volunteer Badge",
                  "Higher Education Information Literacy Level 1",
                  "Business Innovation & Interdisciplinair Samenwerken"
                ]
              });
              qr = data.uri;
              isOpen = true;
            },
            label: $completedJourneys.includes("dominique") ? "Complete" : "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div>
		<div class="${"card svelte-1rt6gg5"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: "8" }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-1rt6gg5"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter.png" }, {}, {})}
					<div class="${"text svelte-1rt6gg5"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Peter van de Meijden`;
          }
        })}</div>
						<div class="${"desc svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Peter is a college enrolment officer who supports students with international
								internships.
							`;
          }
        })}</div></div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: $completedJourneys.includes("peter") ? "completed" : "secondary",
            onClick: async () => {
              selectedJourney = "peter";
              currStep.set(3);
              const { data } = await apiClient.post("/api/starting-offer", { credentials: ["National ID", "Staff ID"] });
              qr = data.uri;
              isOpen = true;
            },
            label: $completedJourneys.includes("peter") ? "Complete" : "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div>
		<div class="${"card svelte-1rt6gg5"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true, borderRadius: "8" }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-1rt6gg5"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani.png" }, {}, {})}
					<div class="${"text svelte-1rt6gg5"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Imani Jameson`;
          }
        })}</div>
						<div class="${"desc svelte-1rt6gg5"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Imani is a corporate HR manager responsible for the hiring and onboarding of new
								staff.
							`;
          }
        })}</div></div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: $completedJourneys.includes("imani") ? "completed" : "secondary",
            onClick: async () => {
              selectedJourney = "imani";
              currStep.set(3);
              const { data } = await apiClient.post("/api/starting-offer", {
                credentials: ["National ID", "Employee ID"]
              });
              qr = data.uri;
              isOpen = true;
            },
            label: $completedJourneys.includes("imani") ? "Complete" : "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_completedJourneys();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9d48a026.js.map
