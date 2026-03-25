import { c as createComponent } from './astro-component_BoJy0tSH.mjs';
import 'piccolore';
import { K as renderTemplate, L as maybeRenderHead } from './sequence_BUPkIzlm.mjs';
import { r as renderComponent } from './entrypoint_BvKCLPeq.mjs';
import { c as cartItems, t as totalsByCurrency, a as clearCart, $ as $$Layout, b as $$BackButton } from './BackButton_BLtTUBTJ.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { a as getStoreConfig } from './supabase_BFkBUlFH.mjs';

const CheckoutForm = () => {
  const [items, setItems] = useState([]);
  const [storeConfig, setStoreConfig] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    ci: "",
    address: "",
    municipality: "",
    province: "",
    reference: "",
    phone: "",
    paymentMethod: "usd"
  });
  useEffect(() => {
    const unsubscribe = cartItems.subscribe((cartData) => {
      setItems(Object.values(cartData));
    });
    getStoreConfig().then((config) => setStoreConfig(config));
    return unsubscribe;
  }, []);
  const totals = totalsByCurrency.get();
  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const generateWhatsAppMessage = () => {
    const WHATSAPP_NUMBER = storeConfig?.whatsapp_number || "34123456789";
    let message = `*Nuevo Pedido*

`;
    message += `*Fecha:* ${formData.date}
`;
    message += `*Hora de entrega:* ${formData.time}
`;
    message += `*Nombre y apellidos:* ${formData.name}
`;
    message += `*C.I:* ${formData.ci}
`;
    message += `*Dirección:* ${formData.address}
`;
    message += `*Municipio:* ${formData.municipality}
`;
    message += `*Provincia:* ${formData.province}
`;
    message += `*Puntos de referencia:* ${formData.reference}
`;
    message += `*Número telefónico:* ${formData.phone}
`;
    message += `*Tipo de moneda:* ${formData.paymentMethod.toUpperCase()}

`;
    message += `*Productos:*
`;
    items.forEach((item) => {
      message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()} ${item.currency}
`;
    });
    if (totals.CUP > 0 || totals.USD > 0) {
      message += `
*Resumen por moneda:*
`;
      if (totals.CUP > 0) {
        message += `• Total CUP: $${totals.CUP.toLocaleString()} CUP
`;
      }
      if (totals.USD > 0) {
        message += `• Total USD: $${totals.USD.toLocaleString()} USD
`;
      }
    }
    message += `
*Total General: $${totalPrice.toLocaleString()}*

`;
    message += `_Nota: Domicilio gratis solo en la ciudad de Bayamo._`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    clearCart();
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-neutral-800 mb-6", children: "Formulario de Pago" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      generateWhatsAppMessage();
    }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "date", className: "block text-sm font-medium text-neutral-700", children: "Fecha" }),
          /* @__PURE__ */ jsx("input", { type: "date", name: "date", id: "date", value: formData.date, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "time", className: "block text-sm font-medium text-neutral-700", children: "Hora de entrega" }),
          /* @__PURE__ */ jsx("input", { type: "time", name: "time", id: "time", value: formData.time, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-neutral-700", children: "Nombre y apellidos" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "name", id: "name", value: formData.name, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "ci", className: "block text-sm font-medium text-neutral-700", children: "C.I" }),
        /* @__PURE__ */ jsx("input", { type: "number", name: "ci", id: "ci", value: formData.ci, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "address", className: "block text-sm font-medium text-neutral-700", children: "Dirección de entrega" }),
        /* @__PURE__ */ jsx("input", { type: "text", name: "address", id: "address", value: formData.address, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "municipality", className: "block text-sm font-medium text-neutral-700", children: "Municipio" }),
          /* @__PURE__ */ jsx("input", { type: "text", name: "municipality", id: "municipality", value: formData.municipality, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "province", className: "block text-sm font-medium text-neutral-700", children: "Provincia" }),
          /* @__PURE__ */ jsx("input", { type: "text", name: "province", id: "province", value: formData.province, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "reference", className: "block text-sm font-medium text-neutral-700", children: "Puntos de referencia" }),
        /* @__PURE__ */ jsx("textarea", { name: "reference", id: "reference", value: formData.reference, onChange: handleInputChange, rows: 3, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-neutral-700", children: "Número telefónico" }),
        /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", id: "phone", value: formData.phone, onChange: handleInputChange, required: true, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "paymentMethod", className: "block text-sm font-medium text-neutral-700", children: "Tipo de moneda para el proceso de pago" }),
        /* @__PURE__ */ jsxs("select", { name: "paymentMethod", id: "paymentMethod", value: formData.paymentMethod, onChange: handleInputChange, className: "mt-1 block w-full border-neutral-300 rounded-md shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50", children: [
          /* @__PURE__ */ jsx("option", { value: "usd", children: "USD" }),
          /* @__PURE__ */ jsx("option", { value: "zelle", children: "Zelle" }),
          /* @__PURE__ */ jsx("option", { value: "cup", children: "CUP" }),
          /* @__PURE__ */ jsx("option", { value: "mixto", children: "Mixto" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500", children: "Nota: Domicilio gratis solo en la cuidad de Bayamo." }),
      /* @__PURE__ */ jsx("button", { onClick: generateWhatsAppMessage, type: "submit", className: "w-full bg-neutral-900 hover:bg-neutral-700 text-white font-bold py-3 px-6 rounded-lg transition-colors", children: "Confirmar y Enviar Pedido" })
    ] })
  ] });
};

const CartSummary = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsubscribe = cartItems.subscribe((cartData) => {
      setItems(Object.values(cartData));
    });
    return unsubscribe;
  }, []);
  const totals = totalsByCurrency.get();
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-neutral-800 mb-4", children: "Resumen del Pedido" }),
      /* @__PURE__ */ jsx("p", { className: "text-neutral-500", children: "Tu carrito está vacío" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-neutral-800 mb-4", children: "Resumen del Pedido" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: items.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-2 border-b", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-neutral-800", children: item.name }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-neutral-600 ml-2", children: [
          "x",
          item.quantity
        ] })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "font-bold text-neutral-900", children: [
        "$ ",
        (item.price * item.quantity).toLocaleString(),
        " ",
        item.currency
      ] })
    ] }, item.id)) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: (totals.CUP > 0 || totals.USD > 0) && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-600 font-medium", children: "Resumen por moneda:" }),
      totals.CUP > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-neutral-700", children: "Total CUP:" }),
        /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-neutral-900", children: [
          "$ ",
          totals.CUP.toLocaleString(),
          " CUP"
        ] })
      ] }),
      totals.USD > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-neutral-700", children: "Total USD:" }),
        /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold text-neutral-900", children: [
          "$ ",
          totals.USD.toLocaleString(),
          " USD"
        ] })
      ] })
    ] }) })
  ] });
};

const $$Checkout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Finalizar Compra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> ${renderComponent($$result2, "BackButton", $$BackButton, {})} <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <!-- Formulario de checkout --> ${renderComponent($$result2, "CheckoutForm", CheckoutForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/CheckoutForm", "client:component-export": "CheckoutForm" })} <!-- Resumen del carrito --> ${renderComponent($$result2, "CartSummary", CartSummary, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ronal/Proyectos/Aqui esta lo tuyo/src/components/react/CartSummary", "client:component-export": "CartSummary" })} </div> </div> ` })}`;
}, "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/checkout.astro", void 0);

const $$file = "/home/ronal/Proyectos/Aqui esta lo tuyo/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
