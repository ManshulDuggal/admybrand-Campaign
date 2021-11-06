//price handler
export const DigitToCurrency = (value: string) => {
  let val = parseInt(value);
  let parts = val.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

// discount handler
export const discounthandler = (mrp, final) => {
  let discount = (mrp - final) / mrp;
  return Math.floor(discount * 100);
};

// coordinate handler
export const splitCords = (coords: string) => {
  if (coords !== "") {
    let cords = coords.split(",");
    return {
      longitude: parseFloat(cords[1]),
      latitude: parseFloat(cords[0]),
    };
  }
};

export const myLoader = ({ src }) => {
  return src;
};
