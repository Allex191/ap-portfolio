import { inputsType } from "components/Footer/Form/Form";
import { verify } from "hcaptcha";
import { NextApiRequest, NextApiResponse } from "next";
import { getInputsValidation } from "utils/getInputsValidation";
import { sendEmailResponseType, sendInputsToEmail } from "./sendInputsToEmail";

export type emailResponseType = {
  isEmailSended: sendEmailResponseType;
};

interface formReqI {
  inputsText: inputsType;
  formVerifyToken: string;
}

const getTokenValidity = async (token: string) => {
  const SECRET_KEY = process.env.HCAPTCHA_SECRET_PSW!;
  let response: boolean = false;
  const SITE_KEY = process.env.HCAPTCHA_SITE_KEY;

  try {
    const verifyData = await verify(SECRET_KEY, token, undefined, SITE_KEY);
    if (verifyData.success === true) {
      response = true;
    }
  } catch (error) {
    response = false;
  } finally {
    return response;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { inputsText, formVerifyToken }: formReqI = req.body;
    const { isInputsValid } = getInputsValidation(inputsText);

    const isTokenValid = await getTokenValidity(formVerifyToken);

    let isEmailSended: sendEmailResponseType = false;
    if (isInputsValid && isTokenValid) {
      isEmailSended = await sendInputsToEmail(inputsText);
    }
    res.status(200).json({ isEmailSended });
  }
}
