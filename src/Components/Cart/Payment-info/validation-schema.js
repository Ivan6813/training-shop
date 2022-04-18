import * as yup from "yup";
import {parse, isDate} from "date-fns";
import {regexEmail, regexCard, regexCardCVV, paymentMethods} from "../../../constants/constants";

const validateCardDate = (value) => {
    const today = new Date();
    const parsedDate = isDate(value)
      ? value
      : parse(value, "MM/yy", new Date());
  
    return parsedDate > today;
};

const validationSchema = yup.object({
    paymentMethod: yup.string(),
    cashEmail: yup.string().when("paymentMethod", {
        is: paymentMethods.payPal,
        then: yup
            .string()
            .trim()
            .required("Поле должно быть заполнено")
            .matches(regexEmail, "Неверный формат")
    }),
    card: yup.string().when("paymentMethod", {
        is: (value => value === paymentMethods.visa || value === paymentMethods.master),
        then: yup
            .string()
            .required("Поле должно быть заполнено")
            .matches(regexCard, "Должно быть ровно 16 символов")
    }),
    cardDate: yup.string().when("paymentMethod", {
        is: (value => value === paymentMethods.visa || value === paymentMethods.master),
        then: yup
            .string()
            .required("Поле должно быть заполнено")
            .test("cardDate", "Неверная дата", value => validateCardDate(value))
    }),
    cardCVV: yup.string().when("paymentMethod", {
        is: (value => value === paymentMethods.visa || value === paymentMethods.master),
        then: yup
            .string()
            .required("Поле должно быть заполнено")
            .matches(regexCardCVV, "Должно быть 3-4 символа")
    }),
});

export default validationSchema;