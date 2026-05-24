// Helper functions
const helpers = {
  formatDate: (date) => {
    return new Date(date).toLocaleDateString();
  },

  validateEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
};

module.exports = helpers;
