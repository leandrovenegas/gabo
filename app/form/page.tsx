import FormClient from "./formClient";
import questions from "./questions";

export default async function Page(){


  return (
    <div>
      <FormClient questions={questions} />
    </div>
  )
}