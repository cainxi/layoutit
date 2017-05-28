/**
 * Created by CAINXI on 2017/5/27.
 */
if(!sessionStorage.lang){
    sessionStorage.lang = 'ch';
}
//global
var common_brand = ["有道云笔记用户指南","Youdao Note User’s Guide"];
var common_home = [" 首页",' Home'];
var starter_guide = [" 入门指南"," StarterGuide"];
var obtain_note = [" 获得途径"," Access"];
var user_guide = [" 使用指南"," UserGuide"];
var feat_ures = [" 特色功能"," Features"];
var common_question = [" 常见问题"," FAQs"];
var change_language = [" 语言切换"," Language"];
var common_search = ["搜索","Search"];

var mark_down = ["有道Markdown：","Youdao Markdown:"];
var web_clipper = ["有道网页剪报：","Youdao Web Clipper:"];
var voice_note = ["有道语音笔记：","Youdao Vocie Note:"];
var web_coll = ["有道云协作：","Youdao Web Collaboration:"];
var mark_down1 = ["为编辑而燃烧。","Love editing right now. "];
var web_clipper1 = ["你就是下一个爱德华。","A super useful Web collector. "];
var voice_note1 = ["你超得过音速吗？","Sound travels faster than character. "];
var web_coll1 = ["连接团队，连接全世界。","Connect team, connect world. "];


var img_01 = ["img/prtsc/Y_01.png","img/prtsc_en/Y_01.jpg"];
var img_02 = ["img/prtsc/Y_02.png","img/prtsc_en/Y_02.jpg"];
var img_03 = ["img/prtsc/Y_03.png","img/prtsc_en/Y_03.jpg"];
var img_04 = ["img/prtsc/Y_04.png","img/prtsc_en/Y_04.jpg"];
var img_05 = ["img/prtsc/Y_05.png","img/prtsc_en/Y_05.jpg"];
var img_06 = ["img/prtsc/Y_06.png","img/prtsc_en/Y_06.png"];
var img_07 = ["img/prtsc/Y_07.png","img/prtsc_en/Y_07.jpg"];
var img_08 = ["img/prtsc/Y_08.png","img/prtsc_en/Y_08.png"];
var img_09 = ["img/prtsc/Y_09.png","img/prtsc_en/Y_09.jpg"];
var img_10 = ["img/prtsc/Y_10.png","img/prtsc_en/Y_10.jpg"];
var img_11 = ["img/prtsc/Y_11.png","img/prtsc_en/Y_11.jpg"];
var img_12 = ["img/prtsc/Y_12.png","img/prtsc_en/Y_12.png"];
var img_13 = ["img/prtsc/Y_13.png","img/prtsc_en/Y_13.jpg"];
var img_14 = ["img/prtsc/Y_14.png","img/prtsc_en/Y_14.jpg"];
var img_15 = ["img/prtsc/Y_15.png","img/prtsc_en/Y_15.jpg"];
var img_16 = ["img/prtsc/Y_16.png","img/prtsc_en/Y_16.jpg"];
var img_17 = ["img/prtsc/Y_17.png","img/prtsc_en/Y_17.png"];
var img_18 = ["img/prtsc/Y_18.png","img/prtsc_en/Y_18.jpg"];
var img_19 = ["img/prtsc/Y_19.png","img/prtsc_en/Y_19.jpg"];
var img_20 = ["img/prtsc/Y_20.png","img/prtsc_en/Y_20.jpg"];
var img_21 = ["img/prtsc/Y_21.png","img/prtsc_en/Y_21.jpg"];
var img_22 = ["img/prtsc/Y_22.png","img/prtsc_en/Y_22.jpg"];
var img_23 = ["img/prtsc/Y_23.png","img/prtsc_en/Y_23.png"];
var img_24 = ["img/prtsc/Y_24.png","img/prtsc_en/Y_24.png"];
var img_25 = ["img/prtsc/Y_25.png","img/prtsc_en/Y_25.png"];
var img_26 = ["img/prtsc/Y_26.png","img/prtsc_en/Y_26.png"];
var img_27 = ["img/prtsc/Y_27.png","img/prtsc_en/Y_27.png"];
var img_28 = ["img/prtsc/Y_28.png","img/prtsc_en/Y_28.jpg"];
var img_29 = ["img/prtsc/Y_29.png","img/prtsc_en/Y_29.jpg"];
var img_30 = ["img/prtsc/Y_30.png","img/prtsc_en/Y_30.jpg"];
var img_31 = ["img/prtsc/Y_31.png","img/prtsc_en/Y_31.jpg"];


//入门指南
var starter_guide1 = ["支持系统","Supporting Systems"];
var starter_guide2 = ["版权信息","Copyright Notice"];
var starter_guide3= ["文档版本","Documentation Version"];
var starter_guide4 = ["技术支持","Technical Support"];
var starter_guide5 = ["安装步骤","Installation Instructions"];

var starter_guide1_1 = ["有道云笔记支持桌面版、网页版、iPhone版、Android版、iPad版、手机网页版这几种形式。"," Youdao Note supports the following systems : "];
var starter_guide1_2 = ["Windows"," Windows"];
var starter_guide1_3 = ["Web"," Web"];
var starter_guide1_4 = ["Mac"," Mac"];
var starter_guide1_5 = ["iPhone","iPhone"];
var starter_guide1_6 = ["iPad","iPad"];
var starter_guide1_7 = ["Android","Android"];
var starter_guide1_8 = ["手机网页","Mobile Web"];
var starter_guide1_9 = ["本部分包括有道云笔记所支持的系统类型以及相关的安装说明。","This chapter will introduce Youdao Note’s supporting systems, installation instructions, copyright notice, ducumentation version and technical support. "];

var starter_install1 = ["本部分将会详细介绍Windows 版本的有道云笔记的安装步骤。","This part will introduce the installation instructions of Youdao Note."];
var starter_install2 = ["有道云自身带有安装向导，用户可根据向导进行操作，下面为具体的操作步骤。","You can install Youdao Note through its installation manager. Following are the steps for installation:"];
var starter_install3 = ["1. 登录有道云笔记官方网站；","1. Log in to website note.youdao.com."];
var starter_install4 = ["2. 点击立即下载；","2. Click the “Download Now” button."];
var starter_install5 = ["3. 点击立即安装；","3. Click the “Install now” button. "];
var starter_install6 = ["4. 点击完成安装； ","4. Click the “Finish” button."];

var starter_copyright = ["版权所有（c）2011-2017，有道云笔记的所有权和运作权归网易有道有限公司所有。","Copyright 2017 NetEase Youdao Information Technology (Beijing) Co., Ltd. All rights reserved."];

var starter_version = ["用户不得将有道云笔记用于非商业用途。","Users can only use Youdao Note for non-commercial purposes."];
var starter_version2 = ["除非经有道公司许可，任何个人或组织不得销售有道云笔记或任何与有道云笔记有关的任何资料、服务或软件。用户不得修改、改编、翻译有道云笔记、创作有道云笔记的派生作品，不得通过反编译、反向工程、反汇编等其它方式，盗取有道云笔记源代码。","No content of Youdao Note shall be modified, transcribed or translated. No individual or orgnization shall sell any materials, services or softwares related to Youdao Note, without the permission of NetEase Youdao.（Documentation Version 5.8.0）"];
var starter_techno = ["若有任何技术问题，请拨打010-82558163, 或登录有道云笔记官方网站","For technical support, call 010-825-581-63 or log in to our website at"];

//获得途径
var obtain_note1 = ["本部分会介绍开始使用有道云笔记的两种方法，一种为免费版，另一种为收费版。","This chapter will introduce two ways to use Youdao Note. You can either use it for free as non-members or charge for membership to enjoy more services."];
var obtain_note2 = ["有道云笔记免费版","Using Youdao Note as Non-members"];
var obtain_note3 = ["有道云笔记会员版","Using Youdao Note as Members"];
var obtain_note4 = ["免费版和会员版特权对比","Comparisons between Non-members and Members"];

var obtain_note2_1 = ["在有道云笔记官网上所下载的版本即为免费版。","You can use Youdao Note for free after installing the software from the official website note.youdao.com."];
var obtain_note2_2 = ["非会员用户拥有 3G 容量的初始免费存储空间，积累在线时长可获得额外赠送的免费存储空间。","Non-members have 3GB of storage, and you can expand storage space by increasing your online time."];

var obtain_note3_1 = ["升级为会员版（月付费会员套餐：18元/月；年付费会员套餐：198元/年）后，会员将会享受以下特权：","Members :CNY 18 /month ;CNY 198 /year. Members will be provided these benefits:"];
var obtain_note3_2 = ["数据恢复：年付费会员一年内可恢复三次误删的数据；","Memebers can have a 50GB of storage."];
var obtain_note3_3 = ["享有 50G 超大存储空间；","Members can choose various paper backgrounds and can share them with others. "];
var obtain_note3_4 = ["可使用多种纸张背景，并分享给其他用户；","Members can choose various paper backgrounds and can share them with others. "];
var obtain_note3_5 = ["支持上传 1G 超大附件；","Members can have 1GB attachment storage."];

var obtain_compare1 = ["充值会员可享受更多特权服务，具体详情如下：","Members enjoy more privileges, as shown in the following Table:"];
var obtain_compare2 = ["表 1 免费版和会员版特权对比表","Table 1 Different privileges between Non-members and Members"];
var obtain_compare3 = ["特权"," Functions"];
var obtain_compare4 = ["普通用户","Non-members"];
var obtain_compare5 = ["会员","Members"];
var obtain_compare6 = ["存储空间"," Storage Space"];
var obtain_compare7 = ["3G"," 3G"];
var obtain_compare8 = ["50G","50G"];
var obtain_compare9 = ["单个附件大小","Attachment Storage"];
var obtain_compare10 = ["200M","200 M"];
var obtain_compare11 = ["1G","1G"];
var obtain_compare12 = ["笔记纸张背景","Paper Backgrounds"];
var obtain_compare13 = ["一张","One Type"];
var obtain_compare14 = ["多张，并持续更新","Various types"];
var obtain_compare15 = ["数据恢复服务","Data recovery"];
var obtain_compare16 = ["不支持"," No Supporting"];
var obtain_compare17 = ["年付费会员一年内三次","3 times/year"];
var obtain_compare18 = ["文字识别OCR ","OCR"];
var obtain_compare19 = ["一个月十次","10 times/month"];
var obtain_compare20 = ["一个月两千次","2,000 times/month"];
var obtain_compare21 = ["数据全部导出","data export"];
var obtain_compare22 = ["三个月一次","3 month/time"];
var obtain_compare23 = ["无限次","Unlimited times"];
var obtain_compare24 = ["查看笔记历史版本"," Duration of historical versions"];
var obtain_compare25 = ["1月","1 month"];
var obtain_compare26 = ["1年","1 year"];
var obtain_compare27 = ["异常登录短信提醒"," SMS Notification for login"];
var obtain_compare28 = ["不支持","No Supporting"];
var obtain_compare29 = ["支持","Supporting"];

//使用指南
var user_guide1 = ["注册","Register"];
var user_guide2 = ["登录","Log in"];
var user_guide3 = ["信息维护","Information Maintenance"];
var user_guide4 = ["+新文档","Creating a New File"];
var user_guide5 = ["最新文档","The Latest Files"];
var user_guide6 = ["与我分享","Share with Me"];
var user_guide7 = ["我的文件夹","My Folders"];
var user_guide8 = ["回收站","Recycle Bin"];

var user_guide1_1 = ["使用有道云笔记注册和登录时，会出现向导提示。","You can see an “Registration Wizard” when registering or logging in to Youdao Note"];
var user_guide1_2 = ["注册操作：","Register procedures: "];
var user_guide1_3 = ["1. 打开注册界面，点击注册；","1. Click the “Register” button to open the register interface. "];
var user_guide1_4 = ["2. 输入注册信息；","2. Enter your information and click the “Register” button."];
var user_guide1_5 = ["3. 点击去激活；","3. Click the “Activiate” buttton."];
var user_guide1_6 = ["4. 打开邮件，点击链接，激活账号；","4. Open your mailbox, and click the link received to activiate your account."];

var user_guide2_1 = ["按照向导，可以有以下两种方式进行登录：","According to the login wizard, you can log in to Youdao Note in two ways."];
var user_guide2_2 = [" 登录界面"," Login Interface"];
var user_guide2_3 = [" 方法一"," Method One"];
var user_guide2_4 = [" 方法二"," Method Two"];

var user_loginface = ["以下为登录 Windows 版的有道云笔记的登录界面。","The following is the login screen of Youdao Note (Windows)."];

var user_meth1_1 = ["进入登录界面后，直接输入已注册的账号和密码即可。","Enter your account and password in the login interface. "];
var user_meth1_2 = ["1. 打开登录界面，输入账号、密码；",'1. Open the login interface, enter your "account" and "password".'];
var user_meth1_3 = ["2. 点击登录；","2. Click the “Log in” button."];

var user_meth2_1 = ["使用第三方账号登录，包括 QQ, 新浪微博，微信，网易邮箱等；","Use the third-party account to log in, including QQ,SinoWeibo, WeChat and NetEase Mail."];
var user_meth2_2 = ["1. 点击第三方平台图标，使用第三方账号登录；","1. Click the third-party platform icons, and use your third-party account to log in."];
var user_meth2_3 = ["2. 输入账号或扫描二维码；","2. Enter your account or scan the QR code."];
var user_meth2_4 = ["3. 点击登录；","3. Click “Log in” button."];


var user_guide3_1 = ["可对有道云笔记的相关信息进行维护和管理。","You can maintain and manage your information on Youdao Note."];
var user_guide3_2 = ["详情如下：","Setings are as follows: "];
var user_guide3_3 = ["个人信息","Personal Information"];
var user_guide3_4 = ["账号设置","Account Settings"];

var user_person1 = ["用户可在此界面填写个人基本信息，例如：姓名，性别，昵称，所在地等。","Click the drop-down menu on the right side of your profile picture, and select the “Personal Information” button. You can update your personal information on this interface, such as name, gender, nickname, and location. "];
var user_person2 = ["操作步骤如下：","To do so,"];
var user_person3 = ["1. 点击头像；","1. Click your profile picture."];
var user_person4 = ["2. 填写个人信息；","2. Enter your personal information."];
var user_person5 = ["3. 点击保存；","3. Click the “Save” button."];

var user_accoun1 = ["在此页面，可以进行账号设置，安全设置，修改密码，以及进行应用管理等操作。","You can use Youdao Note to create a new note or folder, import a word document, and upload a file or folder. "];
var user_accoun2 = ["操作步骤如下：","To do so,"];
var user_accoun3 = ["1. 点击头像右侧的下拉菜单；","1. Click the drop-down menu on the right side of your profile picture."];
var user_accoun4 = ["2. 点击账号设置；","2. Click the “Account Information” button to check your storage space."];
var user_accoun5 = ["3. 点击账号信息，查看存储空间、修改账号密码；","3. Click the “Account Security” button to check other devices and bind your account to your phone number."];
var user_accoun6 = ["4. 点击账号安全，查看设备、绑定手机号码；","4. Click the “Save Mail to Youdao Note” button to save your mail to Youdao Note."];

var user_guide4_1 = ["本页面可以新建笔记，新建文件夹，进行导入 Word，上传文件，上传文件夹操作。","You can use Youdao Note to create a new note or folder, import a word document, and upload a file or folder."];
var user_guide4_2 = ["新建笔记","Creating a New Note"];
var user_guide4_3 = ["新建文件夹","Create a New Folder"];
var user_guide4_4 = ["导入 Word","Import a Word Document"];
var user_guide4_5 = ["上传文件","Upload Files"];
var user_guide4_6 = ["上传文件夹","Upload Folders"];

var user_cann1 = ["新建笔记后，便可以输入笔记内容并进行编辑操作。","After creating a new note, you can edit it."];
var user_cann2 = ["步骤如下：","To do so,"];
var user_cann3 = ["1. 点击新建笔记，编辑笔记内容；点击保存；","1. Click the “Create a New Note” icon, and select the “New Note” button. Then, you can edit your note, after finish, you can click the “Save and Synchronize” icon."];
var user_cann4 = ["2. 点击详细信息；"," Click the detail information."];
var user_cann5 = ["a. 点击添加作者，输入作者信息；","a. Click the “More” icon, and select“File Information” icon. Click “Add Source” button to enter the file source"];
var user_cann6 = ["b. 点击添加来源，输入文件来源；","b. Click the “Add Author” button to enter the author’s name."];
var user_cann7 = ["c. 点击我的文件夹，选择保存位置；","c. Click the “My Folder” button to choose the stoarge location."];
var user_cann8 = ["3. 点击更多；","3. Click the “More” icon "];
var user_cann13 = ["可为笔记进行加密设置，可查看历史版本信息，更改保存位置，导出 Word 文档，打印或删除笔记。","To check the historical version of the file, change storage location, export word documents, and print or delete the file."];
var user_cann9 = ["4. 点击分享；","4. Right-click the file and select the “Share” button to set share permissions."];
var user_cann10 = ["可以设置分享权限；点击第三方平台图标，分享笔记到微博、微信、QQ。","Then, click the third-party icons to share your note through Weibo, WeChat and QQ."];
var user_cann11 = ["5. 点击打开评论；","5. Click the “Comment” icon"];
var user_cann12 = ["输入评论内容；点击评论，评论笔记。","Enter your comments and click the “Send” button to publish your comments."];

var user_canf1 = ["新建文件夹，为所记笔记分门归类，便于查找，条目清晰。","The main goal of Create a New Folder is to provide you with a digital collecting box to sort your files."];
var user_canf2 = ["步骤如下：","To do so,"];
var user_canf3 = ["1. 点击新建文件夹；",'1. Click the "New Folder" button.'];
var user_canf4 = ["2. 输入文件夹名称；","2. Enter the folder’s name."];
var user_canf5 = ["3. 点击下拉菜单；","3. Click the drop-down menu."];
var user_canf6 = ["可进行上传，移动，复制，删除，分享，重命名文件夹的操作，并可为文件夹设置密码；",' Right-click the folder, and you can" upload"," move", "delete"," share"," rename" the newly created folder and encrypt it.'];

var user_iawd1 = ["可将笔记导入到 Word 中。","While writing note you may want to import some word documents into it."];
var user_iawd2 = ["步骤如下：","To do so,"];
var user_iawd3 = ["1. 点击导入word；",'1. Click the "Import a Word Document " button.'];
var user_iawd4 = ["2. 选择本地文档，点击打开；",'2. Choose a local document and click "Open".'];
var user_iawd5 = ["3. 编辑导入文档；","3. Edit the imported document."];
var user_iawd6 = ["4. 点击文档名称，分享或删除该文档；","4. Right-click the document name to share or delete the document."];

var user_ufile1 = ["可上传本地文件到有道云笔记。","While writing note you may want to upload some files into your folders"];
var user_ufile2 = ["步骤如下：","To do so,"];
var user_ufile3 = ["1. 点击上传文件；",'1. Click the "Upload Files" button.'];
var user_ufile4 = ["2. 选择本地文件，点击打开；",'2. Choose a local file and click "Open".'];
var user_ufile5 = ["3. 点击修改，修改保存位置；",'3. Click the "Change" button to change the location of the new file.'];
var user_ufile6 = ["4. 点击开始上传，上传文件",'4. Click the " Start Upload" button to upload it.'];
var user_ufile7 = ["5. 点击文件名称，编辑、分享、下载或删除该文件；","5. Right-click the file name to edit, share, download or delete the file."];

var user_ufolder1 = ["可上传本地文件夹到有道云笔记。","To upload local folders to Youdao Note."];
var user_ufolder2 = ["步骤如下：","To do so："];
var user_ufolder3 = ["1. 点击上传文件夹；",'1. Click the "Upload Folders" button.'];
var user_ufolder4 = ["2. 选择本地文件夹，点击确定；",'2. Choose a local folder and click "OK".'];
var user_ufolder5 = ["3. 点击文件夹，打开文档，编辑文档内容；","3. Click the new folder to open and edit the documents."];
var user_ufolder6 = ["4. 点击文件夹名称，分享或删除文件夹；","4. Right-click the folder name to rename, share, download or delete the folder."];
var user_ufolder7 = ["5. 点击文件夹右侧的下拉菜单，分享、下载或删除文件夹中的文档；","5. Click the drop-down menu on the right side of the folder to share, download or delete its documents. "];

var user_guide5_1 = ["可查看最新文档信息。","To view the information of the latest documents."];
var user_guide5_2 = ["步骤如下：","To do so,"];
var user_guide5_3 = ["1. 在搜索栏中输入关键词，查找文档；","1. Enter keywords in the search bar to search for a document."];
var user_guide5_4 = ["2. 点击搜索栏右侧的下拉菜单，以摘要或列表方式查看文档；","2. Click the drop-down menu on the right side of the search bar to view the documents’ abstracts or list."];
var user_guide5_5 = ["3. 点击文档，可编辑、分享、下载或删除该文档；",'3. Right-click "the document "to edit, share, download, delete it or view its historical versions.'];

var user_guide6_1 = ["可将笔记进行分享。","To share your note with other people."];
var user_guide6_2 = ["1. 点击与我分享，查看别人分享给自己的文档或文件；",'1. Click the "Share with Me" button to view the documents or files shared by other users.'];
var user_guide6_3 = ["2. 点击文档，编辑内容或分享、删除文档；","2. Right-click the document to edit, share or delete it."];

var user_guide7_1 = ["可进行查找，搜索文件夹等操作；","To search for your files or folders, you can:"];
var user_guide7_2 = ["1. 在搜索栏中输入关键词，查找文件夹；",'1. Enter keywords in the" search bar" to search for the folder.'];
var user_guide7_3 = ["2. 点击搜索栏右侧的下拉菜单，以“摘要”或“列表”方式查看文档；","2. Click the drop-down menu on the right side of the search bar to view the documents’ abstract or list."];
var user_guide7_4 = ["3. 点击搜索栏右侧下拉菜单，可查看“创建时间”、“修改时间”、“文件名称”、“文件大小”等文件信息；",'3. Click the drop-down menu on the right side of the search bar to list the files according to "Creation Time", "Last-Modified Time", "File Names" and "File Size".'];
var user_guide7_5 = ["4. 点击文件夹名称，可分享或删除文件夹；","4. Right-click the folder name to share or delete the folder."];

var user_guide8_1 = ["回收站可暂时保留临时删除的文件，文件一旦从回收站删除将不会再找回。","The main goal of Recycle Bin is to provide you with a temporary storage area to keep the deleted files."];
var user_guide8_2 = ["步骤如下：","To do with these files:"];
var user_guide8_3 = ["1. 点击回收站；",'1. Click the "Recycle Bin" button.'];
var user_guide8_4 = ["2. 点击恢复，恢复已删除的文档或文件夹；",'2. Click the "Recover" button to recover the deleted files or folders.'];
var user_guide8_5 = ["3. 点击永久删除，彻底粉碎文档或文件夹；",'3. Click the "Permanently Delete" button to remove the files or folders permanently.'];

//特色功能
var feat_ures1= ["新建Markdown","Create a Markdown"];
var feat_ures2= ["语音笔记","Voice Note"];
var feat_ures3= ["网页剪报功能","Web Clipper"];
var feat_ures4= ["有道云协作","Youdao Cloud Collaboration"];
var feat_ures5= ["有道云笔记包括以下特色功能; 新建 Markdown，语音笔记，网页简报，有道云协作。",'The features of Youdao Note include" Create a Markdown"," Voice Note"," Web Clipper" and "Cloud Collaboration".'];

var feat_ures1_1= ["Markdown 是一种可以使用普通文本编写的标记语言通过简单的标记语法，使普通文本具有一定的格式。","Markdown is a lightweight markup language with plain text formatting syntax which is widely used in our daily life."];
var feat_ures1_2= ["待办事项和清单在日常工作、生活中经常被使用。在 Markdown 中，你只需要在待办的事项文本或者清单文本前加上- [ ]、- [x]即可。","To create a markdown in Youdao Note, you can:"];
var feat_ures1_3= ["1. 点击“新建 Markdown”；",'1. Click the "Create a Markdown" button.'];
var feat_ures1_4= ["2. 点击“编辑 Markdown 内容；”","2. Edit the newly created markdown."];
var feat_ures1_5= ["3. 点击“保存”；",'3. Click the "Save" button.'];
var feat_ures1_6= ["添加“文件信息”、“设置阅读密码”、“更改保存位置”、“下载”、“打印”、“删除”、“分享文件”。操作步骤请参见“新建笔记”，",'To "edit the file information"," encrypt"," download"," print", "delete" or "share”. the markdown and change the its location,please refer to the instructions of "Create a Note" '];
var feat_ures1_7= ["具体步骤请参见http://note.youdao.com/iyoudao/?p=2445","or the website: http://note.youdao.com/iyoudao/?p=2445"];

var feat_ures2_1= ["语音速记为有道云笔记的特色功能之一，大大为用户简化了记笔记流程。","The main goal of Voice Note is to provide you with quicker-note-taking ability."];
var feat_ures2_2= ["语音速记功能不仅能够对普通话进行识别，还能对英文、粤语、河南话、四川话等进行识别和记录","It can recognize English, Mandarin, Cantonese, Henan dialect, Sichuan dialect, etc. To use the Voice Note:"];
var feat_ures2_3= ["单击“录制”图标，开始录制。",'Click the "Record" icon，Start recording.'];
var feat_ures2_4= ["点击“完成”按钮。",'Click the "Finish" button.'];
var feat_ures2_5= ["选择一种语言将语音翻译成文本。","Choose a language to translate the voice into text."];
var feat_ures2_6= ["点击“继续录制”按钮，连续录制。",'Click the"Continue Recording" button to record continuously.'];
var feat_ures2_7= ["点击“播放”播放录音。",'Click "Play" to play the recording.'];
var feat_ures2_8= ["点击“导出”按钮导出录音。",'Click the "Export" button to export the recording.'];
var feat_ures2_9= ["点击“更多选项”图标加密，删除，查看笔记或更改文件位置。",'Click the "More Options" icon to encrypt, delete, view the note or change the file location.'];

var feat_ures3_1= ["网页剪报功能为有道云笔记的特色功能之一，可以快速收藏相关的网页等内容。","You may want to collect some webpages sometimes."];
var feat_ures3_2= ["步骤如下：","To do so,"];
var feat_ures3_3= ["1. 打开浏览器工具栏，点击“收藏”；","1. Open the shortcut of “Web Clipper”."];
var feat_ures3_4= ["2. 将“网页剪报”图标拖曳到浏览器的“收藏栏”；",'2. Drag the "Web Clipper" button to the Favorites Bar of your browser.'];
var feat_ures3_5= ["3. 发现想收藏的网页时，点击“收藏到有道云笔记”；",'3. Click the "Add to Youdao Note" button when you want to save a website.'];
var feat_ures3_6= ["4. 输入账号密码登录有道云笔记；","4. Enter the account and password to log in to Youdao Note."];
var feat_ures3_7= ["5. 点击“同步”；",'5. Click the "Synchronize" button.'];

var feat_ures4_1= ["有道云协作是一款以工作资料为中心的团队管理、编辑和沟通的产品。","Youdao Cloud Collaboration is a working-data-oriented product for group management, edit and communication."];
var feat_ures4_2= ["它为提供团队成员线上的资料库，文档、笔记、演示 PPT、Photoshop文件、设计图纸等各种类型的办公资料都可团队共享和协同编辑，并支持多终端使用。主要面向项目的一线执行者设计，团队成员通过组成群组，实现工作资料的共享、编辑和沟通等。群主可以通过分享邀请链接、群号、输入成员有道云笔记账号或是昵称，邀请团队成员加入群组。","It provides group members with an online database.Various types of working files like documents, notes, PowerPoint, Photoshop documents and design drawings can be shared and collaboratively edited by group, and used by multi-terminal.It is designed for front-line executives of projects. By creating a group, group members can share and edit working files, as well as communicate timely.Group owner can invite members into the group by sharing invitation link or group number, or entering members’ accounts or nicknames."];
var feat_ures4_3= [" Note: 有道云协作有三个特点：易上手的团队协作产品；支持协作编辑和多版本对照功能；多终端覆盖实现无缝沟通。更多信息请参见：http://note.youdao.com/groupintro.html"," Note: There are three characteristics of Youdao Cloud Collaboration:easily used product for group collaboration; support for collaborative editing and multi-version comparison; cover on multi-terminal for timely communication.http://note.youdao.com/groupintro.html"];

//faqs
var common_question1= ["同步失败","Sync Failure"];
var common_question2= ["未知错误","Unknown Error"];
var common_question3= ["将笔记导入另一账户","Import Note to Another Account"];
var common_question4= ["云空间不足","Insufficient Cloud Space"];

var common_question1_1 = ["同步失败存在以下三种情况：","Sync Failure"];
var common_question1_2= ["网络问题；","Network Problem;"];
var common_question1_3= ["笔记冲突；","Notes Conflicting；"];
var common_question1_4= ["某篇笔记同步失败；","One Note Sync Failure；"];
var common_question1_5= ["情况一","Condition One"];
var common_question1_5_1= ["解决方案如下：","Solutions are as follow:"];
var common_question1_5_2= ["1. 重新连接计算机的 WLAN；","1. Relink PC to WLAN."];
var common_question1_5_3= ["2. 切换网络；","2. Or, switch the network."];

var common_question1_6= ["网络问题","Network Problem."];
var common_question1_7= ["情况二","Condition Two"];
var common_question1_7_1= ["1. 点击头像右侧的下拉菜单；",'1. Click the" drop-down menu "on the right side of profile picture.'];
var common_question1_7_2= ["2. 点击注销登录，保证一个账号只在一个平台登录；","2. Click “log out” and make sure one account only log in to one platform."];
var common_question1_7_3= ["3. 对比内容冲突的笔记，人工进行修订；","3. Compare the contents of conflicting notes and revise it yourself."];
var common_question1_8= ["情况三","Condition Three"];
var common_question1_8_1= ["解决方案如下：","Solutions are as follow:"];
var common_question1_8_2= ["1. 新建笔记；","1. Open a new note."];
var common_question1_8_3= ["2. 复制同步失败的笔记内容到新建笔记；","2. Copy the content of failed one and paste it to the new note."];
var common_question1_9= ["某篇笔记同步失败；","One Note Sync Failure."];

var common_question2_1= ["可使用以下两种解决方案：","Two solutions are as follow:"];
var common_question2_2= ["重新下载有道云笔记；","Reinstall Youdao Note."];
var common_question2_3= ["清除缓存文件，重新登录云笔记；","Or, clear cookies and caches of browser then log in again."];
var common_question2_4= ["情况一","Condition One"];
var common_question2_4_1= ["重新下载有道云笔记；","reinstall Youdao Note."];
var common_question2_5= ["解决方案","Solutions"];
var common_question2_6= ["情况二","Condition Two"];
var common_question2_6_1= ["操作步骤如下：","Steps are as follow,"];
var common_question2_6_2= ["1. 打开浏览器；","1. Open the browser."];
var common_question2_6_3= ["2. 点击工具；","2. Click the “Tools” button."];
var common_question2_6_4= ["3. 点击Internet选项；","3. Select Internet options button"];
var common_question2_6_5= ["4. 点击高级>重置>确认信息，再次点击重置;","4. Click Advance>Reset>Confirm, and click Reset again."];
var common_question2_6_6= ["5. 点击确认","5. Click the “Confirm” button."];
var common_question2_7= ["清除网页浏览器的缓存文件，再次登录有道云笔记。","Clear cookies and caches of browser then log in again."];

var common_question3_1= ["如何将已有笔记导入另外账户？两步便可实现。","How to import my notes to another account?"];
var common_question3_2= ["1. 登录账户","1. Log in"];
var common_question3_3= ["a. 打开文档；","a. Open the file."];
var common_question3_4= ["b. 点击“下拉菜单”；","b. Click the drop-down menu."];
var common_question3_5= ["c. 点击“导出”；","c. Click the “Export” button."];
var common_question3_6= ["d. 点击“有道云笔记文件”；","d. Click the “Youdao Note File” button."];
var common_question3_7= ["e. 保存到本地文件夹并注销登录；","e. Save to local folders and log out."];
var common_question3_8= ["2. 登录要导入笔记的另一账号","2. Use another account to log in"];
var common_question3_9= ["a. 点击“下拉菜单”；","a. Click the drop-down menu."];
var common_question3_10= ["b. 点击“导入”；","b. Click the “Import” button."];
var common_question3_11= ["c. 点击“有道云笔记文件”；","c. Click the “Youdao Note File” button."];
var common_question3_12= ["d. 选择之前导出的文件；","d. Import the file exported before."];

var common_question4_1= ["有以下两种方式可以扩大云空间。","Two ways as follows may enlarge the storage space."];
var common_question4_2= ["1. 升级会员，可享受50G存储空间","1. Become a Member to have a 50GB of storage space."];
var common_question4_3= ["2. 增加在线时间可提升存储空间，增长速度为0.1KB/s","2. The storage space can be enlarged as online time increases. The growth rate is 0.1KB/s."];

var local_lang = sessionStorage.lang;
$(document).ready(function(){
    registerWords();
    translate();
});

function changelangjson_to_en(){
    sessionStorage.lang = 'en';
    local_lang = sessionStorage.lang;
    translate();
}

function changelangjson_to_ch(){
    sessionStorage.lang = 'ch';
    local_lang = sessionStorage.lang;
    translate();
}

function _tr(src,local_lang) {
    var current_lang;
    if(local_lang=="ch"){
        current_lang="0";
    }else{
        current_lang="1";
    }
    return eval(src+"["+current_lang+"]");

}

function trans_img() {

}

function translate() {
    $("[lang_self]").each(function() {
        switch (this.tagName.toLowerCase()) {
            case "input":
                $(this).val( _tr($(this).attr("lang_self"),local_lang) );
                break;
            default:
                $(this).text(_tr($(this).attr("lang_self"),local_lang));
        }
    });

    $("img").each(function() {
        $(this).attr("src", _tr($(this).attr("lang_img"),local_lang));
    });
}
function registerWords() {
    $("[lang_self]").each(function() {
        switch (this.tagName.toLowerCase()) {
            case "input":
                $(this).attr("lang_self", $(this).val());
                break;
            default:
                $(this).attr("lang_self", $(this).text());
        }
    });
}
