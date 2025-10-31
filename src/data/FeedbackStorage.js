export const loadFeedback = () => {
  const data = localStorage.getItem("feedback");
  return data ? JSON.parse(data) : [];
};

export const saveFeedback = (feedbackList) => {
  localStorage.setItem("feedback", JSON.stringify(feedbackList));
};

export const addFeedback = (feedback) => {
  const list = loadFeedback();
  const newFeedback = { id: Date.now(), ...feedback };
  list.push(newFeedback);
  saveFeedback(list);
  return newFeedback;
};

export const removeFeedback = (id) => {
  const updated = loadFeedback().filter((f) => f.id !== id);
  saveFeedback(updated);
};

export const clearFeedback = () => {
  localStorage.removeItem("feedback");
};
