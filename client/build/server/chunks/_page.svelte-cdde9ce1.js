import { c as create_ssr_component, v as validate_component, e as escape } from './index-78a5ef04.js';
import { g as goto } from './navigation-15ccedb0.js';
import { B as Button } from './Button-30e11d4d.js';
import { C as Card } from './Card-10be3654.js';
import { M as Modal } from './Modal-b22cf575.js';
import { A as Avatar } from './Avatar-45f2bbf8.js';
import { T as Typography } from './Typography-d68adf7d.js';
import { L as Loading } from './Loading-d6042c7f.js';
import { H as Highlight } from './Highlight-608665b0.js';
import { c as currentJourney } from './flows.store-b2e554df.js';
import { c as currStep } from './onboarding.store-b8b17118.js';
import './index3-4472c736.js';
import './index2-c56263c2.js';

const css = {
  code: ".container.svelte-116npo4.svelte-116npo4.svelte-116npo4{display:flex;justify-content:center;flex-wrap:wrap;text-align:center}.container.svelte-116npo4>.svelte-116npo4.svelte-116npo4{padding:20px 0}.container.svelte-116npo4 .desc.svelte-116npo4.svelte-116npo4{padding-bottom:5px;width:100%}.container.svelte-116npo4 .sub-title.svelte-116npo4.svelte-116npo4{padding-top:0}.container.svelte-116npo4 .cards.svelte-116npo4.svelte-116npo4{width:100%}.container.svelte-116npo4 .cards.svelte-116npo4>.card.svelte-116npo4{width:100%;padding:10px 0}.container.svelte-116npo4 .cards>.card .card-content.svelte-116npo4.svelte-116npo4{display:flex;justify-content:space-between;align-items:center;text-align:left}.modal-content.svelte-116npo4.svelte-116npo4.svelte-116npo4{display:flex;transition:all 0.5s;padding-bottom:30px}.modal-content.svelte-116npo4>.svelte-116npo4>.svelte-116npo4{padding:20px}.modal-content.svelte-116npo4>.svelte-116npo4>.p.svelte-116npo4{padding:10px 20px}.modal-content.svelte-116npo4 .left.svelte-116npo4.svelte-116npo4{display:flex;flex-wrap:wrap;justify-content:center;max-width:400px}.modal-content.svelte-116npo4 .right.svelte-116npo4.svelte-116npo4{display:flex;justify-content:center;width:400px;flex-wrap:wrap;align-items:flex-start;align-content:flex-start;text-align:center;padding:10px 20px}.modal-content.svelte-116npo4 .right .qr.svelte-116npo4.svelte-116npo4{height:145px;width:145px}.modal-content.svelte-116npo4 .right .sub-text.svelte-116npo4.svelte-116npo4{padding:0px 20px;width:100%;padding-bottom:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let journey;
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
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    journey = selectedJourney && journeys[selectedJourney];
    $$rendered = `<div class="${"modal"}">${validate_component(Modal, "Modal").$$render(
      $$result,
      { withBorder: true, isOpen },
      {
        isOpen: ($$value) => {
          isOpen = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${journey ? `<div class="${"modal-content svelte-116npo4"}"><div class="${"left svelte-116npo4"}"><div class="${"avatar svelte-116npo4"}">${validate_component(Avatar, "Avatar").$$render($$result, { variant: "large", image: journey.img }, {}, {})}</div>
					<div class="${"heading svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(journey.heading)}`;
            }
          })}</div>
					<div class="${"p svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(journey.p1)}`;
            }
          })}</div>
					<div class="${"p svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(journey.p2)}`;
            }
          })}</div>
					${!qrVisible ? `<div class="${"button svelte-116npo4"}">${validate_component(Button, "Button").$$render(
            $$result,
            {
              variant: "white",
              label: "Continue",
              onClick: () => {
                currStep.set(4);
                if (selectedJourney)
                  currentJourney.set(selectedJourney);
                setTimeout(
                  () => {
                    buttonVisible = true;
                    currStep.set(5);
                  },
                  8e3
                );
                qrVisible = true;
              }
            },
            {},
            {}
          )}</div>` : ``}</div>
				${qrVisible ? `<div class="${"right svelte-116npo4"}"><img src="${"/imgs/qr.png"}" class="${"qr svelte-116npo4"}">
						<div class="${"scan-header svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? "Your credentials are confirmed!" : "Scan QR code to connect to NGDIL & receive your credentials.")}`;
            }
          })}</div>
						<div class="${"sub-text svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
            default: () => {
              return `${escape(buttonVisible ? `Click to begin ${selectedJourney}'s journey.` : "In your mobile wallet, scan the QR code to connect to NGDIL, then accept receipt of Peter\u2019s verifiable credentials.")}`;
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
          )}` : `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}`}</div>` : ``}</div>` : ``}`;
        }
      }
    )}</div>
<div class="${"container svelte-116npo4"}"><div class="${"heading svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "heading" }, {}, {
      default: () => {
        return `You\u2019re all set! ${validate_component(Highlight, "Highlight").$$render($$result, {}, {}, {
          default: () => {
            return `Let\u2019s choose the user journey`;
          }
        })} you would like to explore
			first.`;
      }
    })}</div>
	<div class="${"desc svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "button" }, {}, {
      default: () => {
        return `Click the get started button to select the journey you would like to experience.
		`;
      }
    })}</div>
	<div class="${"sub-title svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "sub-text" }, {}, {
      default: () => {
        return `(It is recommended to experience the student journey first.)
		`;
      }
    })}</div>
	<div class="${"cards svelte-116npo4"}"><div class="${"card svelte-116npo4"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-116npo4"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/dominique.png" }, {}, {})}
					<div class="${"text"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Dominique Veritas`;
          }
        })}</div>
						<div class="${"desc svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Dominique is a school graduate, excited to enrol as a student at Koning Willem I
								College.`;
          }
        })}</div></div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedJourney = "dominique";
              currStep.set(3);
              isOpen = true;
            },
            label: "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div>
		<div class="${"card svelte-116npo4"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-116npo4"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/peter.png" }, {}, {})}
					<div class="${"text"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Peter van de Meijden`;
          }
        })}</div>
						<div class="${"desc svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Peter is a college enrolment officer who supports students with international
								internships.
							`;
          }
        })}</div></div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedJourney = "peter";
              currStep.set(3);
              isOpen = true;
            },
            label: "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div>
		<div class="${"card svelte-116npo4"}">${validate_component(Card, "Card").$$render($$result, { withBorder: true }, {}, {
      default: () => {
        return `<div class="${"card-content svelte-116npo4"}">${validate_component(Avatar, "Avatar").$$render($$result, { image: "/imgs/imani.png" }, {}, {})}
					<div class="${"text"}"><div class="${"heading"}">${validate_component(Typography, "Typography").$$render($$result, { variant: "card-header" }, {}, {
          default: () => {
            return `Imani Jameson`;
          }
        })}</div>
						<div class="${"desc svelte-116npo4"}">${validate_component(Typography, "Typography").$$render($$result, {}, {}, {
          default: () => {
            return `Imani is a corporate HR manager responsible for the hiring and onboarding of new
								staff.
							`;
          }
        })}</div></div>
					${validate_component(Button, "Button").$$render(
          $$result,
          {
            variant: "secondary",
            onClick: () => {
              selectedJourney = "imani";
              currStep.set(3);
              isOpen = true;
            },
            label: "Get Started"
          },
          {},
          {}
        )}</div>`;
      }
    })}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cdde9ce1.js.map
