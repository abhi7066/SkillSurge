import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            In order to use certain features (like accessing content), you need
            to create a user account, which requires us to collect and store
            your email address, password, and account settings. To create an
            instructor account, we collect and store your name, email address,
            password, and account settings.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            As you use certain features on the site, you may be prompted to
            submit additional information including occupation, government ID
            information, verification photo, date of birth, race/ethnicity,
            skill interests, and phone number. Upon account creation, we assign
            you a unique identifying number.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            You can also choose to provide profile information like a photo,
            headline, biography, language, website link, social media profiles,
            country, or other data. Your Profile Data will be publicly viewable
            by others.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Parts of the Services let you interact with other users or share
            content publicly, including by uploading courses and other
            educational content, posting reviews about content, asking or
            answering questions, sending messages to students or instructors, or
            posting photos or other work you upload. Such shared content may be
            publicly viewable by others depending on where it is posted.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            When you access content, we collect certain data including which
            courses, assignments, labs, workspaces, and quizzes you’ve started
            and completed; content and subscription purchases and credits;
            subscriptions; completion certificates; your exchanges with
            instructors, teaching assistants, and other students; and essays,
            answers to questions, and other items submitted to satisfy course
            and related content requirements.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            If you contact us for support or to report a problem or concern
            (regardless of whether you have created an account), we collect and
            store your contact information, messages, and other data about you
            like your name, email address, messages, location, SkillSurge user ID,
            refund transaction IDs, and any other data you provide or that we
            collect through automated means (which we cover below). We use this
            data to respond to you and research your question or concern, in
            accordance with this Privacy Policy.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
