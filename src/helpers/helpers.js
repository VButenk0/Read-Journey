export const transformId = (payload) => {
  if (Array.isArray(payload)) {
    return payload.map((item) => {
      if (item._id) {
        return { ...item, id: item._id, _id: undefined };
      }
      return item;
    });
  } else {
    if (payload._id) {
      return { ...payload, id: payload._id, _id: undefined };
    }
    return payload;
  }
};
