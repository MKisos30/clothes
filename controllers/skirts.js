const Skirt = require('../models/skirts');

exports.getSkirts = async (req, res) => {
    try {
        const skirt = await Skirt.find();
        res.json({
            success: true,
           data: skirt,
        });
    } catch (error) {
        console.log(error)
    }
};

exports.addSkirt = async (req, res) => {
    try {
        const newSkirt = new Skirt(req.body);
        await newSkirt.save();
        res.json({
            success: true,
            data: newSkirt,
        });
    } catch (error) {
        console.log(error)
    }
};

exports.updateSkirt = async (req, res) => {
    try {
        const { id } = req.query;
        const editSkirt = await Skirt.findByIdAndUpdate(id, req.body)
        res.json({
            success: true,
            data: editSkirt,
        });
    } catch (error) {
        console.log(error)
    }
};

exports.deleteSkirtById = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedOne = await Skirt.findByIdAndDelete(id)
        if (deletedOne) {
            res.json({
                success: true,
                data: deleted,
            }); 
        } else {
            res.json({
                success: false,
                data: 'ID not found'
            }); 
        }
    } catch (error) {
        console.log(error)
    }
};
//5. למצוא אחד
exports.oneSkirt = async (req, res) => {
    try {
        const { id } = req.params;
        const getSkirtById = await Skirt.findById(id);
        if (getSkirtById) {
            res.json({
                success: true,
                data: getSkirtById,
            });
        } else {
            res.json({
                success: false,
                data: 'ID not found'
            }); 
        }
    } catch (error) {
        console.log(error)
    }
};