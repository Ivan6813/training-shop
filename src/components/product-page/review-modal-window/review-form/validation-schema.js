import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string().trim().required("Введите имя"),
    review: yup.string().trim().required("Введите отзыв")
});

export default validationSchema;