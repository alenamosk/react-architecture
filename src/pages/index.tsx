import Article from "@/components/Article";
import PageLayout from "@/components/PageLayout";
import { ReactNode } from "react";
import WithToken from "@/components/WithToken";
import Hider from "@/components/Hider";
import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <>
      <h1>Hello, React Architecture</h1>
      <div>
        {/* <WithToken> */}
        <PageLayout>
          <Article
            title="Breaking news"
            author="Alena"
            content="Today nothing of importance has happened"
          >
            <Hider>
              {" "}
              <p>This is my article.</p>
            </Hider>
          </Article>
          <CustomButton variant="primary">
            🐕 Donate to the PetShelter 🐈
          </CustomButton>
        </PageLayout>
        {/* </WithToken> */}
      </div>
    </>
  );
}
