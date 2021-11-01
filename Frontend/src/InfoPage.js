const InfoPage = () => {
    
    return (
        <div>
        <div id="heading">
        <h1>
          Ubisoft
        </h1>
        <h2>
          Video to text game credits identification
        </h2>
       </div>

       <div class="info">
         <div class="info-heading">
         <h1>
           Description
         </h1>
         </div>
         <br/>
           <p>
           Ever loved a video game so much that you started wondering who were the great developers behind it? Our team thought about it too, so we decided to work on it and are proud to present you with this website. We intend to make your job easy by helping you research the developers behind this game. All you must do is, upload a single or multiple video game end credit links on our website and you will get all the necessary information in just one click. Additionally, you can search your desired game based on categories like company name, game name, etc. The interactive user experience of this website will help you navigate through different functionalities that our team has engineered to bring their ideas to life. Feel free to explore our website and happy gaming.
           </p>
           <br/>
       </div>

       <div class="info">
         <div class="info-heading">
         <h1>
           User Guide
         </h1>
         </div>
         <br/>
           <p>
             The web application is designed to do two main things:
           </p>
           <ul class="a">
            <li>One would be for the user to upload the desired videos from they which they would like to extract the video game credits.</li>
            <li>The othe functionality is for the user to serach based on a fixed set of parameters. These parameters for example could be one among name of the person, name of the game, name of the company that made the game etc., </li>
          </ul>
           <br/>
       </div>

       <div class="info">
         <div class="info-heading">
         <h1>
           Guide to Use the Upload Page
         </h1>
         </div>
         <br/>
           <p>
             Below is a quick summary :
           </p>
           <ul class="a">
            <li>Input the values in the respective text fields. Note that all the input fields need to have an input for the extraction to work. </li>
            <li>Click on the button "Add to extract list button" to view the data that will be processed for extraction of video game credits. </li>
            <li>The user has an option to remove the data that has to be processed by clicking on the remove button.</li>
            <li>Once the user has confirmed the data that he/she wants to extract, click on the "extract" button to run the extraction pipeline. </li>
          </ul>
           <br/>
       </div>

       <div class="info">
         <div class="info-heading">
         <h1>
           Guide to use the Search Page
         </h1>
         </div>
         <br/>
           <p>
             Here is a quick Description :
           </p>
           <ul class="a">
            <li>There are several boxes that can be to input the values based on which the user could extract data </li>
            <li>A dropdown list will pop up giving the top suggestions based on the input text. </li>
            <li>The user must select one among the options that are displayed in the dropdown list. </li>
            <li>Once the user is satisified with his/her input data, hit search to filter data based on the input values. </li>
          </ul>
           <br/>
       </div>

       </div>
    );
  }

export default InfoPage;