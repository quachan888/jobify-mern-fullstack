const createJob = async (req, res) => {
    res.send('create job');
};

const deleteJob = async (req, res) => {
    res.send('deleteJob');
};
const getAllJobs = async (req, res) => {
    res.send('getAllJobs');
};
const updateJob = async (req, res) => {
    res.send('Update job');
};
const showStats = async (req, res) => {
    res.send('Show Stat');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
