import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  let contactMessages = List.empty<ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required.");
    };

    let newMessage : ContactMessage = {
      name;
      email;
      message;
    };

    contactMessages.add(newMessage);
  };

  public query ({ caller }) func getContactMessages() : async [ContactMessage] {
    contactMessages.toArray();
  };

  public query ({ caller }) func getContactInfo() : async {
    email : Text;
    phone : Text;
    address : Text;
  } {
    {
      email = "sccclasses@gmail.com";
      phone = "+91 788 796 3508";
      address = "Old Jalna In Front of Devine English School (Dukhi Nagar)";
    };
  };
};
