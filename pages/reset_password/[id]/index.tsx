import React from "react";
import ResetPassword from "../../../components/resetPassword/resetPassword";
import { forgetdata } from "../../../constants/meta";
import MetaHead from '../../../elements/MetaHead/MetaHead';

export default function reset_password() {
  return (
    <div>
      <MetaHead 
        title={forgetdata.forgetpassword.title}
        author={forgetdata.forgetpassword.author}
        keywords={forgetdata.forgetpassword.keywords}
        description={forgetdata.forgetpassword.description}/>
      <ResetPassword />
    </div>
  );
}
