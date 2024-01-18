import { useProfile } from "../ProfileContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Profile = () => {
  const { profileData } = useProfile();

  return (
    <div>
      {profileData ? (
        <div>
          <h2 className="text-2xl font-bold  mx-6">User Profile</h2>
          <hr className="mb-4 w-36 mx-4 border-t-4 border-primary rounded-lg" />

          <Card className="max-w-9xl mx-5 ">
            <div className="grid grid-cols-3 gap-8 p-4">
              <CardMedia
                component="img"
                height="100"
                image={profileData.Values[0].UserImage}
                alt="UserImage"
                className="border rounded-md col-span-1"
              />

              <CardContent className="col-span-2">
                <div className="grid grid-cols-4 gap-  ">
                  <div className="mb-5">
                    <h3 className="font-medium mb-5">
                      Full Name: {profileData.Values[0].FullName}
                    </h3>
                    <h3 className="font-medium mb-5">
                      Email: {profileData.Values[0].Email}
                    </h3>
                    <h3 className="font-medium mb-5">
                      Contact: {profileData.Values[0].Contact}
                    </h3>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-medium mb-5">
                      User Name: {profileData.Values[0].UserName}
                    </h3>
                    <h3 className="font-medium mb-5">
                      Address: {profileData.Values[0].Address}
                    </h3>
                    <h3 className="font-medium mb-5">
                      Phone Number: {profileData.Values[0].PhnNum}
                    </h3>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-medium mb-5">
                      {profileData.Values[0].UserType === "O" && (
                        <>UserType: Owner</>
                      )}
                      {/* {profileData.Values[0].UserType === "A" && (
                            <>UserType: Admin</>
                          )} */}
                    </h3>

                    <h3 className="font-medium mb-5">
                      District: {profileData.Values[0].District}
                    </h3>

                    <h3 className="font-medium mb-5">
                      House Number: {profileData.Values[0].DefHouseNBum}
                    </h3>
                  </div>

                  <div>
                    <h3 className="font-medium mb-5">
                      Last Login Date: {profileData.Values[0].LastLoginedDate}
                    </h3>
                    <h3 className="font-medium mb-5">
                      Last Login Time: {profileData.Values[0].LastLoginedTime}
                    </h3>
                    <button className="border w-full rounded-md bg-primary">
                      Verified
                    </button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
