// Example controller
class ExampleController {
  static getExample(req, res) {
    res.json({ data: 'Example data' });
  }

  static createExample(req, res) {
    res.status(201).json({ message: 'Example created' });
  }
}

module.exports = ExampleController;
