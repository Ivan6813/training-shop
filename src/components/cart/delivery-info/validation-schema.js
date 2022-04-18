import * as yup from "yup";
import store from "../../../redux/store/index";
import {regexPhone, regexEmail, deliveryMethods} from "../../../constants/constants";

const validationSchema = yup.object({
    deliveryMethod: yup.string(),
    phone: yup
        .string()
        .trim()
        .matches(regexPhone, "Проверьте код оператора")
        .required("Поле должно быть заполнено"),
    email: yup
        .string()
        .trim()
        .matches(regexEmail, "Неверный формат")
        .required("Поле должно быть заполнено"),
    country: yup.string().trim().required("Поле должно быть заполнено"),
    city: yup.string().when("deliveryMethod", {
        is: (value => value === deliveryMethods.postOffice || value === deliveryMethods.express),
        then: yup.string().trim().required("Поле должно быть заполнено")
    }),
    street: yup.string().when("deliveryMethod", {
        is: (value => value === deliveryMethods.postOffice || value === deliveryMethods.express),
        then: yup.string().trim().required("Поле должно быть заполнено")
    }),
    house: yup.string().when("deliveryMethod", {
        is: (value => value === deliveryMethods.postOffice || value === deliveryMethods.express),
        then: yup.string().trim().required("Поле должно быть заполнено")
    }),
    apartment: yup.string().trim(),
    postcode: yup.string().when("deliveryMethod", {
        is: deliveryMethods.postOffice,
        then: yup.string().trim().required("Поле должно быть заполнено")
    }),
    storeAddress: yup.string().when("deliveryMethod", {
        is: deliveryMethods.pickup,
        then: yup
            .string()
            .trim()
            .required("Поле должно быть заполнено")
            .test("storeAddress", "Указанный город не найден", value => {
                const {order} = store.getState();
                return order.cities.some(item => item.city === value)
            })
    }),
    agree: yup.bool().oneOf([true], "Вы должны согласиться на обработку личной информации")
});

export default validationSchema;