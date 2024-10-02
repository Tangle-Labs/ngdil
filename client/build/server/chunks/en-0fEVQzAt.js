const components = {
  big_business_corp: "Big Business Corp",
  issued_by: "Issued by {IssuerName}",
  future_tech_co: "Future Tech Co.",
  open_jobs_network: "The Open Jobs Network",
  login: {
    open_jobs: "You have successfully logged in to the Open Jobs Network.",
    kw1c_staff: "You have successfully logged in to the KW1C Staff Portal.",
    kw1c_learner: "You have successfully logged in to the KW1C Learner Portal.",
    bbc: "You have successfully logged in to the Big Business Corp website.",
    future_tech: "You have successfully logged in to the Future Tech Co. website."
  },
  continue_in_browser: "You may continue in your browser app.",
  small_screen: "This demo is best experienced on a bigger screen, please visit on a desktop or a tablet.",
  go_back_to_ngdil: "Go Back to NGDIL",
  back: "Back",
  "continue": "Continue",
  complete: "Complete",
  get_started: "Get Started",
  download: "Download",
  change: "Change",
  contact_us: "Contact Us",
  retry: "Retry",
  enroll_now: "Enroll now",
  apply_now: "Apply Now",
  try_another_journey: "Try Another Journey",
  pending: "Pending",
  accepted: "Accepted",
  active: "Active",
  expired: "Expired",
  cancel: "Cancel",
  passed: "Passed",
  verified: "Verified",
  missing: "Missing",
  status: "Status"
};
const creds = {
  certificate: "Certificate",
  national_id: "National ID",
  kw1c_diploma: "KW1C Diploma",
  bbc_staff_id: "Big Business Corp Staff ID",
  school_course_certificate: "School Course Certificate",
  kw1c_college_id: "KW1C College ID",
  internatinalisation_badge: "Internationalisation Badge",
  internship_completion_badge: "Internship Completion Badge",
  internship_reference: "Internship Reference",
  internship_badge: "Internship Badge",
  college_id: "College ID",
  college_badge: "College Badge"
};
const issuer = {
  the_govt: "The Government",
  koning_willem_i_college: "Koning Willem I College",
  irish_future_print_co: "Irish Future Print Co.",
  volunteer_corps: "Volunteer Corps",
  issuer: "Issuer"
};
const applicants = {
  Gilian_OLeary: "Gilian O'Leary",
  Marcus_Erikson: "Marcus Erikson",
  Cassandra_Blanc: "Cassandra Blanc",
  Marcus_Lithero: "Marcus Lithero",
  Ada_Liefsson: "Ada Liefsson",
  Carter_Jorvig: "Carter Jorvig",
  Malik_Chaudry: "Malik Chaudry",
  Sarah_Jones: "Sarah Jones",
  Ivar_Leifsson: "Ivar Leifsson",
  Lagertha_Bonde: "Lagertha Bonde"
};
const qr = {
  open_id_4_vci: "Open ID 4 VCI",
  self_issued_op_v2: "Self Issued OP v2"
};
const onboarding = {
  choose_journey: {
    dominique: {
      heading: "Meet Dominique! A student enrolling at KW1 College, NL.",
      p1: "Dominique has just left school and is looking to enrol at Koning Willem I College to study and obtain a Diploma.",
      p2: "Using their self-sovereign identity, help Dominique enrol at college, earn a course credential, share that credential with potential employers, and apply for a new job."
    },
    peter: {
      heading: "Meet Peter! A college enrolment officer at KW1 College, NL.",
      p1: "Peter is an enrolment officer at Koning Willem I College looking to support students with their training and enrolment on international internship experiences.",
      p2: "Using self-sovereign identity, help Peter evaluate student internship eligibility, enrol students on internationalisation course, issue course badges, assign internship placements, and verify student completion of internships on their return from their international placements."
    },
    imani: {
      heading: "Meet Imani! A corporate HR manager at Future Tech Co.",
      p1: "Imani is in charge of the hiring and training of staff at the Future Tech Co. where she employs and developers the company workforce.",
      p2: "Using self-sovereign identity, help Imani in the hiring of new employees, issuing of company ID, creation of internal open badges, and the training and issuing of open badges to employees who successfully completed the company course training."
    },
    cred_confirmed: "Your credentials are confirmed!",
    scan_qr_to_receive_cred: "Scan QR code to connect to NGDIL & receive your credentials",
    click_to_begin_journey: "Click to begin {selected}'s journey.",
    scan_qr_receive_vc: "In your mobile wallet, scan the QR code to connect to NGDIL, then accept receipt of {selected}’s verifiable credentials.",
    start_journey: "Start {selected}'s Journey",
    all_set_choose_journey: "You’re all set! [Let’s choose the user journey] you would like to explore first",
    welcome_back_choose_journey: "Welcome back! [Choose the user journey] you would like to explore next.",
    click_to_get_started: "Click the get started button to select the journey you would like to experience.",
    exp_stud_journey_first: "It is recommended to experience the student journey first.",
    dominique_veritas: "Dominique Veritas",
    dominique_desc: "Dominique is a school graduate, excited to enrol as a student at Koning Willem I College.",
    peter_van_de_meijdan: "Peter van de Meijden",
    peter_desc: "Peter is a college enrolment officer who supports students with international internships.",
    imani_jameson: "Imani Jameson",
    imani_desc: "Imani is a corporate HR manager responsible for the hiring and onboarding of new staff."
  },
  download_wallet: {
    scan_qr_desc: "Scan the QR code to download the {walletName} identity wallet",
    click_to_continue: "Click to continue once you have downloaded your wallet",
    must_have_wallet: "To begin with [self-sovereign identity] you must first have an identity wallet app.",
    select_application: "Select the application you wish to download by clicking the button and follow the onscreen installation instructions to get started.",
    vira_id_wallet: "Vira Identity Wallet",
    vira: "Vira",
    tangle_labs: "From Tangle Labs",
    unime: "UniMe",
    impierce: "From Impierce",
    already_downloaded: "Already downloaded the wallet?"
  },
  welcome_to_ngdil: "Welcome to the [NGDIL interactive demo] for self-sovereign identity in learning.",
  intro: "Here we will explore the value SSI can bring to the individual participants within the education and learning space, from learners, to educators, and employers.",
  start_journey: "Start your Journey"
};
const journeys = {
  dominique: {
    intro: "Hi Dominique. [Let’s get you started on your learning journey.] Select your experience to get started",
    select_first_experience: "Select the first experience to start Dominique’s journey and enrol at KW1C to obtain your course credential.",
    enroll_to_kw1c: "Enrol at KW1C and earn a course credential.",
    kw1c_desc: "Here you will use your self-sovereign identity to connect to the KW1C learning portal, apply for an educational course, complete the course and obtain your first verifiable credential.",
    social_media: "Share your new credential on social media.",
    social_media_desc: "Here you will connect your identity to a social job network and share your new credential with prospective employers as you search for a new job.",
    apply_job: "Apply for a job with your digital CV.",
    apply_job_desc: "Here you will connect to an interested employer and share a number of credentials as a combined digital CV to land you your new job.",
    view_jobs: "You made it to the [Big Business Corp website. Let’s login] to view their jobs board.",
    scan_and_conn_to_bbc: "In your mobile wallet, scan the QR code & accept the connection request to login privately to the Big Business Corp website.",
    passwordless_login: "Passwordless Login",
    scan_qr_to_login: "Scan QR to Login",
    scan_qr_login_desc: "Scan the QR to login to the Big Business Corp website.",
    select_course: "You’re in! Now let’s [take a look at the courses] available and select the course you wish to study.",
    click_to_enroll: "Click the enroll now button to select the course you wish to study to begin the application process.",
    kw1c_recieved_cred: "KW1C has received your application credentials.",
    kw1c_requesting_cred: "KW1C is requesting you to share your credentials for course application.",
    continue_further_in_browser: "You may continue further in the browser.",
    scan_qr_and_accept_request: "In your mobile wallet scan the QR Code and accept the request to share the credentials with KW1C to privately send the credentials required.",
    click_to_proceed: "Click continue to proceed",
    waiting_for_creds: "Waiting for credentials",
    available_courses: "available courses",
    creds_required: "This course requires the following credentials:",
    enroll_to_course_of_choice: "You've made it to the [KW1C website, let's log in] to enrol on your course of choice.",
    scan_and_conn_to_kw1c: "In your identity wallet, scan the QR code and accept the connection request to access the KW1C learners portal.",
    login_to_kw1c: "login to KW1C",
    scan_to_access_kw1c: "Scan the QR to access the KW1C learners portal.",
    application_received_via_digital_cv: "Your application via digital CV has been received by Big Business Corp!",
    requesting_digtal_cv: "Big Business Corp is requesting you share your digital CV.",
    scan_qr_accept_request_from_bbc: "In your mobile wallet scan the QR and accept the request to share credentials with Big Business Corp",
    have_all_creds_apply_position: "Looks like you have all the credentials required. Let’s apply for the position and [share your credentials.]",
    click_apply_now_to_share_creds: "Click the apply now button to share multiple credentials as your digital CV.",
    bbc_job_board: "Big Business Corp Jobs Board",
    application_requirements: "Application Requirements",
    applicants_req_following_creds: "To apply for this role, applicants are required to share the following credentials:",
    successfully_enrolled_and_earned_course_cred: "Amazing, [you’ve successfully enrolled with KW1C] and earned your course credential.",
    heres_what_you_achieved: "Here is what you have achieved so far with your self-sovereign identity:",
    passwordless_login_to_kw1c: "Passwordless login to the KW1C portal",
    privately_shared_creds: "Privately shared your enrolment credential",
    completed_course_at_kw1c: "Completed your course at KW1C",
    privately_received_creds: "Privately received a new course credential",
    have_new_cred_click_continue: "Now you have your new credential, let’s get sharing it with potential employers. Click continue to move on with your journey.",
    accepted_following_cred: "You have accepted the following credential:",
    scan_qr_accept_cred_from_bbc: "In your mobile wallet scan the QR and accept the credential from Big Business Corp.",
    awaiting_confirmation: "Awaiting on confirmation",
    got_job_bbc_issued_staff_id: "[You’ve got the job! Congratulations,] Big Business Corp now wants to issue you with your staff ID.",
    get_staff_id_btn_desc: "Click the get staff ID button to receive your staff ID credential from Big Business Corp.",
    congrats_you_got_the_job: "Congratulations! You got the job",
    bbc_welcomes_to_team_and_send_cred: "Big Business Corp would like to welcome you to the team and send you the following credential:",
    get_staff_id: "Get Staff ID",
    you_are_now_emp: "{You are now an employee of the Big Business Corp.} Let’s see what you have achieved.",
    connected_pvtly_bbc_website: "Connected privately to Big Business Corp website",
    shared_multiple_creds_as_cv: "Shared multiple credentials as a digital CV",
    got_the_job: "Got the Job!",
    securely_received_staff_id_cred: "Securely received your new Staff ID credential",
    successfully_completed_dominique_journey: "You have successfully completed Dominique’s journey enrolling and obtaining a new course credential, sharing your credential to potential employers, and successfully landing a new job.",
    explore_other_journeys_desc: "To explore other journeys for employers and educators click continue.",
    contact_ngdil: "Contact NGDIL",
    shared_cred_and_employer_msged: "You [shared your credential] and an interested employer has messaged you after seeing your skills.",
    view_msg_btn_desc: "Click view message to see what the employer has to say.",
    from_bbc: "from Big Business Corp.",
    hi_dominique: "Hi Dominique",
    congrats_on_new_qualifications: "Congratulations on your new qualification.",
    saw_skills_so_apply_job_role: "We saw your skills on your profile and would like to [invite you to apply for a role at the Big Business Corp.]",
    looking_forward_to_your_application: "Looking forward to your application.",
    regards: "Regards",
    dasha_bloomberg: "Dasha Bloomberg",
    welcome_dominique: "Welcome, Dominique Veritas",
    dominique_shared_cred: "Dominique Veritas just shared a new credential",
    your_msg: "Your Messages",
    you_have_new_msg: "You have a new message",
    view_msg_btn: "View Message",
    logged_in_to_open_job_network: "You’re all [logged in to the Open Jobs Network.] Now, share your credential with potential employers.",
    share_cred_btn_desc: "Click the share credential button to share your credential on your Open Jobs Network profile.",
    open_job_network_received_confirmation: "The Open Jobs Network has received your confirmation to share your credential!",
    allow_open_job_network_to_share_cred: "Allow the Open Jobs Network to share your credential ",
    scan_qr_and_share_cred_to_open_job_network: "In your mobile wallet scan the QR and accept the request to share the credentials with Open Jobs Network to share your credentials to employers.",
    your_latest_creds: "Your Latest Credentials",
    share_cred_btn: "Share Credential",
    lets_conn_to_open_jobs_network: "It’s time to spread the word. [Let’s connect to the Open Jobs Network] to share your credential",
    scan_qr_and_conn_pvtly_to_open_jobs: "In your mobile wallet, scan the QR code & accept the connection request to login privately to the Open Jobs Network.",
    login_to_open_jobs_network: "Login to Open Jobs Network",
    scan_qr_to_login_to_open_jobs_network: "Scan the QR code to login to the Open Jobs Network website",
    new_cred_and_job_invite_done_land_on_job_left: "[A new credential, a job invite,] all that’s left to do now is to land that job.",
    passwordless_sign_on_to_social_network: "Passwordless sign on to a social network",
    shared_cred_with_employers: "Shared your credential with potential employers",
    received_job_invitation: "Received a job invitation",
    share_digital_cv_and_get_job: "With a job invitation at hand, let’s get sharing your digital CV with the potential employer and get that job! Click continue to proceed",
    received_and_accepted_new_course_cred: "You have received and accepted your new course credential.",
    kw1c_sent_new_course_cred: "KW1C has sent you a new course credential.",
    visible_in_wallet_and_free_for_you_to_share: "This is now visible in your wallet and free for you to share with anyone, at any time.",
    scan_qr_and_accept_cred_from_kw1c: "In your mobile wallet scan the QR and accept the credential from KW1C to receive your new qualification.",
    awaiting_cred_acceptance: "Awaiting credential acceptance...",
    completed_course_with_top_mark_now_get_cred: "[Exciting times. You have completed your course] with top marks. Let’s get your credential.",
    accepted_on_course_now_study: "Congratulations. [You have been accepted] on the course. Now you need to complete your studies.",
    get_cred_btn_desc: "Click the get credential button to receive your credential from KW1C.",
    start_studying_btn_desc: "Click the start studying button to continue and complete the course.",
    congrats_dominique_you_completed_course: "Congratulations Dominique, you have completed your course!",
    hello_dominique_welcome_to_new_course: "Hello Dominique, welcome to your new course",
    get_cred: "Get Credential",
    start_studying: "Start Studying",
    jobs_available_select_one_job: "There are a few jobs available. [Let’s select the job to apply] for that is relevant to our new credential.",
    select_job_with_new_cred: "Select the job you can now apply for with your new credential"
  },
  imani: {
    imani_hired_emp_intro: "{Great new hire.} Let’s get creating a new open badge and training the staff.",
    imani_yet_to_hire_emp_intro: "Hi Imani. Let’s {get you hiring some experienced staff}. Select your first experience to get started.",
    select_next_experience: "Select the next experience to continue Imani’s journey and train some employees.",
    select_first_journey: "Select the first experience to start Imani’s journey and get hiring a new employee.",
    hiring_emp_with_digital_cv: "Hiring an employee with a digital CV",
    business_portal_dashboard_desc: "Here you will login to your business portal using your self-sovereign identity, verify applicant credentials, select a new hire, and issue an employee ID card.",
    create_and_issue_company_skill_badge: "Create and issue company skills badge",
    company_skill_badge_desc: "Here you will create a reusable open badge template, select your employees for training, and privately issue skills badges to successful trainees.",
    creds_verified_with_good_cv: "Great! All of {ChosenApplicant}’s credentials are verified. With such a good CV let’s hire {ChosenApplicant}.",
    cred_shared_time_to_verify: "{ChosenApplicant} has shared their digital CV with you. It’s time to [verify their credentials.]",
    hire_candidate_btn_desc: "Click the hire applicant button to hire the candidate. You can view the candidate’s individual credentials by clicking the eye icon in each row.",
    verify_cv_btn_desc: "Click the verify CV button to verify {ChosenApplicant}’s credentials.",
    "3d_engineer_job_applicant": "3D Engineer job applicant",
    digital_cv: "Digital CV",
    verify_cv_btn: "Verify CV",
    verifying_btn: "Verifying",
    hire_applicant_btn: "Hire Applicant",
    personal_statement: "Personal Statement",
    future_engineer_diploma: "Future Engineer Diploma",
    internship_certificate: "Internship Certificate",
    ireland: "Ireland",
    volunteering_badge: "Volunteering Badge",
    view_3_new_applications_to_hire: "You’re in, and it appears you have {three new applications}. View applicants to choose who to hire.",
    view_applicant_btn_desc: "Click the view applicant button next to the applicant you want to hire.",
    "3d_engineer_job_applications": "3D Engineer job applications",
    view_applicant: "View Applicant",
    successfully_trained_issued_badge_to_emp: "And they’re away. {You have successfully trained and issued} open badges to your employees.",
    click_to_see_self_sovereign_id_desc: "Click the continue button to proceed and see what you have achieved with self-sovereign identity.",
    badge_holders: "Badge Holders",
    emp_name: "Employee Name",
    designation: "Designation",
    badge_status: "Badge Status",
    created_new_badge_desc: "You’ve successfully {created a new badge template.} Let’s continue to get training the staff.",
    click_continue_staff_training: "Click continue to proceed to staff training.",
    company_badges: "Company Badges",
    badge_name: "Badge Name",
    health_safety: "Health & Safety",
    communication: "Communication",
    problem_solving: "Problem Solving",
    print_automation: "Print Automation",
    future_tech_to_create_new_badge: "Future Tech Co. {is big on employee development.} Let’s create a new badge so we can train staff.",
    create_new_badge_btn_desc: "Click the Create New Badge button to continue and create a new open badge template.",
    create_new_badge: "Create New Badge",
    save_badge_template_for_trainees: "Your badge template is looking great. {Let’s save the badge} template so it is available for trainees.",
    save_badge_btn_desc: "Click the save badge button to confirm the badge template.",
    confirm_badge: "Confirm Badge",
    badge_issuer: "Badge Issuer",
    badge_description: "Badge Description",
    save_badge: "Save Badge",
    hired_emp_lets_train: "You’ve already {successfully verified and hired} a new employee. Let’s get them trained up next.",
    heres_what_you_achieved: "Here is what you have achieved so far with your self-sovereign identity:",
    securely_logged_in_dashboard: "Securely logged in to the company dashboard",
    verified_cv_creds: "Verified applicants digital CV credentials",
    hired_emp: "Hired an employee",
    privately_issued_emp_id_cred: "Privately issued an Employee ID credential",
    create_badge_and_issue_to_staff_desc: "You have privately and securely managed the hiring process using verifiable credentials. With new staff hired, let’s create an open badge for an internal course and issue them to successful staff.",
    get_staff_trained_btn_desc: "Click continue to proceed and get your staff trained.",
    about_to_issue_applicant_with_emp_id_cred: "You are about to issue {ChosenApplicant} with an Employee ID Credential",
    click_issue_cred_to_continue: "To continue and issue the credential please click the issue credential button.",
    issue_cred: "Issue Credential",
    applicant_received_emp_id_card: "Great work. {ChosenApplicant} has received their employee ID card. Let’s continue to see what’s next.",
    applicant_accepted_job_and_joined_system: "{ChosenApplicant} has accepted your job offer and joined the system. Let’s issue their employee ID credential.",
    click_continue_to_see_what_you_achieved: "Click the continue button to proceed and see what you have achieved so far.",
    click_issue_id_to_issue_applicant_emp_id_cred: "Click the Issue ID button to issue {ChosenApplicant} with an employee ID credential from the company.",
    company_employees: "Company Employees",
    action: "Action",
    "3d_print_designer": "3d Print Designer",
    issue_id: "Issue ID",
    successfully_created_new_badge_and_issued_to_team: "Congratulations. {You have successfully created} a new open badge and issued them to your team.",
    created_open_badge_template: "Created an open badge template",
    trained_eligible_staff: "Trained eligible staff",
    issued_open_badge_to_emp: "Issued open badges to successful employees",
    completed_imani_journey: "You have successfully completed Imani’s journey verifying applicant credentials, hiring new employees, issuing employee ID, creating new open badges, and training and issuing of open badges to the team.",
    explore_other_journeys: "To explore other journeys for educators and learners click continue.",
    contact_ngdil: "Contact NGDIL",
    lets_login_to_future_tech_co_staff_dashboard_by_ssi: "It’s a new day, so {let’s get started by logging in} to the Future Tech Co. staff dashboard using your SSI.",
    scan_qr_to_conn_to_future_tech_co_dashboard: "Scan the QR code in your mobile wallet to connect to the Future Tech Co. dashboard.",
    staff_connect: "Staff Connect",
    scan_qr_to_login: "Scan QR to Login",
    scan_qr_to_login_to_future_tech_co: "Scan the QR to login to connect to Future Tech Co.",
    "3d_print_team_management": "3d Print Team Management",
    team_manager_badge_desc: "This badge is to certify the holder demonstrates the ability to operate as a team manager within an advanced technology 3d print environment.",
    "lets_create_img_template for_badge": "A badge needs to look the part. {Let’s create an image template}for the badge in the creator.",
    badge_img_ready_now_add_info: "Now we {have our badge image ready,} let’s give the badge some information to show what it is for.",
    select_shape_color_then_click_continue: "Select the shape and color for your badge and click continue to proceed.",
    click_fields_to_add_badge_name_and_desc: "Click the fields to add a badge name and description, then click continue to proceed.",
    new_badge: "New Badge",
    select_badge_shape_color: "Select your badge shape & color",
    add_badge_info: "Add Badge Information",
    "3d_print_engineer": "3d Print Engineer",
    enter_badge_name_here: "Enter Badge name here",
    "3d_print_engineer_badge_desc": "3d Print Engineer Badge Description",
    enter_badge_desc_here: "Enter Badge description here",
    about_to_issue_badges: "You are about to issue {StaffCount} badges - {BadgeName}",
    click_issue_badge_to_issue_and_continue: "To continue and issue the badges click the issue badges button.",
    issue_badges: "Issue Badges",
    staff_successfully_trained_now_issue_badges: "Not bad at all, the {staff were successful in their training.} Let’s issue them their badges.",
    select_emp_that_passed_then_click_issue_badges: "Select the check boxes next to the employees that passed, then click the issue badges button to continue.",
    trainees: "trainees",
    course_result: "Course Result",
    technical_engineer: "Technical Engineer",
    senior_3d_print_operator: "Senior 3D Print Operator",
    staff_attended_training_see_results: "Your staff have attended training. Continue to see results.",
    to_view_staff_result_click_continue_to_result: "To view the staff results from training click the Continue to Results button.",
    continue_to_result: "Continue To Results",
    "4_staff_available_for_training_select_1": "There are four staff {available for the new badge training.} Select the staff to train",
    select_emp_to_train_and_click_train_staff: "Select the check boxes next to the employees you wish to train, then click the Train Staff button to continue.",
    train_staff: "Train Staff"
  },
  peter: {
    intro: "Hi Peter. Let’s get you [started with enrolling your students.] Select your experience to get started.",
    select_experience_to_start_journey: "Select the experience to start Peter’s journey and evaluate and enrol students.",
    verify_student_and_enroll_on_internationalisation_course: "Verify Student and enrol on Internationalisation course.",
    verify_student_enroll_desc: "Here you will use your self-sovereign identity to connect to the KW1C staff dashboard, assess student eligibility for international internships, and enrol students onto the internationalisation course.",
    issue_internationalisation_course_badge_and_assign_student_internship: "Issue internationalisation course badges and assign student internship placements.",
    issue_course_badge_desc: "In this journey you will issue internationalisation badges to students who were successful in their course studies and assign a student an international internship placement.",
    verify_students_internship_creds: "Verify students internship credentials",
    verify_students_internship_desc: "After the return of students from their international internship you will verify their participation and successful completion of their internship by verifying their new credentials issued by international companies.",
    issued_student_courses_badges: "You have successfully issued {BadgeCount} student internationalisation course badges",
    about_to_issue_student_courses_badges: "You are about to issue {BadgeCount} student internationalisation course badges",
    click_continue_to_assign_internships: "Click the CONTINUE button to continue and assign student internship placements.",
    click_issue_badges_to_issue_selected_students: "Click ISSUE BADGES button to issue the selected students.",
    issue_badges: "Issue Badges",
    all_passed_now_issue_course_badges: "[All the students have passed!] That’s great news. Let’s issue their course badges.",
    select_students_and_issue_their_badges: "Select the checkboxes next to the students and click the issue course badges button to issue their badges.",
    internationalisation_course_students: "Internationalisation Course Students",
    student_applicant: "Student Applicant",
    internship_category: "Internship Category",
    "3d_print_design": "3D Print Design",
    course_result: "Course Result",
    pass: "Pass",
    issue_course_badges: "Issue Course Badges",
    successfully_enrolled_students_onto_course: "Exciting times. [You have successfully enrolled] your students onto the internationalisation course.",
    click_continue_to_see_what_you_achieved: "Click the continue button to proceed and see what you have achieved so far with self-sovereign identity",
    course_to_study: "Course to Study",
    internatinalisation_course: "Internationalisation Course",
    course_status: "Course Status",
    about_to_invite_students_on_course: "You are about to invite {StudentCount} students on the course: Internationalisation",
    click_send_invites_to_confirm: "Click Send Invitations to confirm the invites.",
    send_invites: "Send Invites",
    select_students_and_issue_course_invites: "Three students are [looking to get this badge.] Let’s select the students and issue their course invites.",
    select_students_and_click_issue_course_invite: "Select the checkboxes next to the students you wish to invite, then click the issue course invite button.",
    internationalisation_course_applicants: "Internationalisation Course Applicants",
    course_application: "Course Application",
    send_invitations: "Send Invitations",
    successfully_enrolled_students_with_kw1c: "Amazing, you’ve [successfully enrolled students] with KW1C!",
    heres_what_you_achieved: "Here is what you have achieved so far with your self-sovereign identity:",
    passwordless_login_to_kw1c_staff_portal: "Passwordless login to the KW1C staff portal",
    verified_student_applicants_creds: "Verified student applicants credentials",
    issued_course_invitations: "Issued course invitations",
    enrolled_students_onto_course: "Enrolled students onto a course",
    verifed_and_enrolled_students_onto_course_for_future_international_internships: "You have privately and securely managed the verification and enrolment of students onto the internationalisation course, to prepare them for their future international internships.",
    click_continue_to_get_their_course_badge_and_find_internships: "Click continue to get them their course badges and find some suitable internship placements.",
    students_returned_from_internships_now_verify_internship_completion: "Your students have [returned from their internships abroad.] Let’s verify their internship completion.",
    click_verify_completion_to_proceed_To_verify: "Click the verify completion button to proceed to verify the credentials for your internship students.",
    internship_students: "Internship Students",
    internship_placement: "Internship Placement",
    action: "Action",
    verify_completion: "Verify Completion",
    use_passwordless_login_to_access_kw1c_staff_portal: "Time to get to work. Let’s use [passwordless login] to access the KW1C staff portal.",
    scan_qr_and_accept_request_to_access_kw1c_portal: "In your identity wallet, scan the QR code and accept the connection request to access the KW1C staff portal.",
    login_to_kw1c: "login to KW1C",
    scan_qr_to_access_kw1c_staff_portal: "Scan the QR to access the KW1C staff portal.",
    assigned_internship: "You have successfully assigned {PeterAssignedStudent} their internship placement.",
    about_to_assign_internship: "You are about to assign {PeterAssignedStudent} an internship placement with:",
    click_continue_to_proceed: "Click the CONTINUE button to proceed",
    assign_internship_btn_desc: "Click the ASSIGN INTERNSHIP button to assign your student internship placement.",
    awaiting_confirmation: "Awaiting confirmation...",
    assign_placement: "Assign Placement",
    "2_relevent_internship": "{PeterAssignedStudent} has [two relevant internship opportunities.] Let’s assign their placement.",
    click_assign_internship_btn_to_student: "Click the assign placement button on the internship you wish to assign to the student.",
    student_internship_placement: "Student Internship Placement",
    successfully_assigned_placements: "Amazing, you’ve [successfully assigned internship] placement for your students!",
    evaluated_student_course_results: "Evaluated student course results",
    issued_course_badges: "Issued course badges",
    issued_internship_placements: "Issued internship placements",
    completed_peter_journey: "You have successfully reviewed student course results and issued their open badges for internationalisation, and found and enlisted them with their international internship placements.",
    verify_internship_completion: "The students are going to head off and complete their internships abroad, we can verify their successful completion on their return.",
    click_to_proceed: "Click continue to proceed.",
    "3_students_ready_choose_1_for_internship": "Three students are ready to go. [Choose the student you want] to assign an internship placement for.",
    assign_placement_btn_desc: "Click the assign placement button to choose the internship for the student.",
    internship_applications: "Internship Applications",
    successfully_evaluated_enrolled_trained_verified: "You’ve successfully [evaluate, enrolled, trained, & verified] your students international internships.",
    pvtly_requested_creds_for_verification: "Privately requested credentials for verification",
    securely_verified_and_confirmed_student_internship: "Securely verified and confirmed student internships",
    internationalisation: "Internationalisation",
    successfully_verified_student_internships: "You have successfully navigated the privacy and simplicity of self-sovereign identity to prepare and verify students for international internships, and also verify their international credentials upon their return.",
    learn_about_ssi_in_edu: "To learn more about SSI in education and",
    get_in_touch_with_ngdil_and_continue_journey: "learning, get in touch with NGDIL. To return to explore another user journey, click continue to proceed.",
    contact_ngdil: "Contact NGDIL",
    about_to_request_following_creds: "You are about to request the following credentials:",
    click_request_creds_btn_to_confirm: "Click the REQUEST CREDENTIALS button to confirm and issue the request.",
    request_cred: "Request Credentials",
    to_confirm_request_cred_for_verification: "To [confirm {PeterAssignedStudent}’s internship completion,] let’s request the credentials for verification.",
    verified_student_creds_take_a_look: "It looks like {PeterAssignedStudent} had a very [successful international internship.] Take a look at the verified credentials.",
    request_creds_btn_desc: "Click the request credentials button to verify the student credentials.",
    eye_icon_btn_desc: "Click the eye icons next to each credential to view the credentials. Click continue to proceed.",
    student_internship_progress: "Student Internship Progress",
    verifying: "Verifying",
    cred_type: "Credential Type",
    view_application_enrolled_intro: "To evaluate {PeterChosenStudent}’s eligibility [let’s request the credentials] required to participate in the internship.",
    view_application_not_enrolled_intro: "It appears {PeterChosenStudent} is missing an internationalisation badge. Let’s enrol them onto the course.",
    view_application_not_enrolled_sub_text: "Click the enrol student button to enrol them onto the internationalisation course.",
    view_applications_enrolled_sub_text: "Click the request credentials button to get the students credentials",
    view_results: "View Results",
    enrol_student: "Enrol Student",
    course_name: "Course Name",
    request_credentials: "Request Credentials",
    credential_type: "Credential Type",
    view_applications_intro: "The students are keen to get on their international internships. Let’s see [if they meet the requirements.]",
    view_applications_sub_text: "Click the view application button to check a student’s application.",
    view_application: "View Application",
    view_courses_intro: "Your [students have completed their course.] Let’s check their results and issue their badges.",
    view_courses_subtext: "Click the view results button to see the outcome for the internationalisation course students.",
    active_courses: "Active Courses"
  }
};
const en = {
  components,
  creds,
  issuer,
  applicants,
  qr,
  onboarding,
  journeys
};

export { applicants, components, creds, en as default, issuer, journeys, onboarding, qr };
//# sourceMappingURL=en-0fEVQzAt.js.map
