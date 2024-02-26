import User from "../model/user.model.js";



const followToggle = async (req, res) => {
    try {
      const { userId } = req.body;
      const { followingId } = req.params;

      const owner = await User.findById(userId);
      const fUser = await User.findById(followingId);
    //   console.log("owner: ",owner, "fUser", fUser)
      
      // Check if the current user is already following the target user
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isFollowing = user.following.includes(followingId);
      if (isFollowing) {
        // Remove the target user from the following list of the current user
        await User.findByIdAndUpdate(userId, {
          $pull: { following: followingId },
        });
        // Remove the current user from the followers list of the target user
        await User.findByIdAndUpdate(followingId, {
          $pull: { followers: userId },
        });
      } else {
        // Add the target user to the following list of the current user
        await User.findByIdAndUpdate(userId, {
          $push: { following: followingId },
        });
        // Add the current user to the followers list of the target user
        await User.findByIdAndUpdate(followingId, {
          $push: { followers: userId },
        });
      }
      res.status(200).json({ message: "Follow status updated successfully" });
    } catch (error) {
      console.error("Error toggling follow status:", error);
      res.status(500).json({ message: "Failed to toggle follow status" });
    }
  };
  

const checkFollow = async (req, res) => {
    try {
      const { userId } = req.body;
      const { followingId } = req.params;
      
      const user = await User.findById(userId);
    //   console.log(user)
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      const isFollowing = user.following.includes(followingId);
      res.json({ following: isFollowing });
    } catch (error) {
      console.error("Error checking follow status:", error);
      res.status(500).json({ message: "Failed to check follow status" });
    }
  };
  

export { followToggle, checkFollow };
