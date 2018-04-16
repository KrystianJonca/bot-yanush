module.exports.run = async (bot,message,args) => {
    let msg = await message.channel.send("Loading avatar...");

    await message.channel.send({files: [
        {
            attachment: message.author.displayAvatarURL,
            name: "avatar.png"
        }
    ]})

    msg.delete();
    return;

}
module.exports.config = {
    name: ["avatar"],
    args:"",
    group:"Random",
    description: "See how beautiful your avatar is!",
    enabled: true,
    avaiable_on_other_categories: true    
}