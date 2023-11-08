const saveModelInDbUtil = async (model) => {
  try {
    await model.save();
  } catch (error) {
    throw error;
  }
};

export { saveModelInDbUtil };
