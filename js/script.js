var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}

var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;

    var greetText =
      "####################################################################################\n"+
      "|[[b;#00DE12;]\t\t ______    ___   ___  ___         _        _______                    ]\t|\n"+  
      "|[[b;#00DE12;]\t\t|  _   |  |   | |   |/  /        / \\      |  ____/    | |      | |    ]\t|\n"+ 
      "|[[b;#00DE12;]\t\t| |_)  |  |   | |   '  /        / / \\     \\ \\___      | |      | |    ]\t|\n"+ 
      "|[[b;#00DE12;]\t\t|______/  |   | |     <        / /___\\     \\_____     | |______| |    ]\t|\n"+ 
      "|[[b;#00DE12;]\t\t|  _   \\  |   | |      \\      / ______\\     ___  |    |  ______  |    ]\t|\n"+ 
      "|[[b;#00DE12;]\t\t| |_)  |  |   | |   .   \\    / /       \\   ____| |    | |      | |    ]\t|\n"+ 
      "|[[b;#00DE12;]\t\t|______|  |___| |___|\___ \\  / /         \\ |______|    | |      | |    ]\t|\n"+
      
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "|\t\tHi, I'm " + commandText('Bikash Dash') + " - CTO of Traveltech Startup Localtrip Based in New Delhi. |\n"+
      "|\t\tPlease type " +commandText('ls')+" or " +commandText('help')+ " for a list of commands.    \t\t\t\t\t\t|\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "####################################################################################\n";

   
          
    if(!ret){
    
        this.echo("\n" + greetText);
    } else {
        return greetText;
    }
  },
  ls: function(){
    this.exec('menu');
  },
  rm: function(command){
    this.echo();
    this.echo("|  Oh no!! don't delete that!");  
    this.echo();
  },
  cd: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  directory is not selected.");
    }
  },
  find: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  help: function(){
    this.exec('menu');
  },
  menu: function(){
    // this.echo();
    // this.echo("|  " + commandText("intro") + "               - Display Message of the Day");
    this.echo();
    this.echo("|  " + commandText("about") + "              - Summary of me");
    this.echo("|  " + commandText("work") + "               - My Professional Experience");
    this.echo("|  " + commandText("skills") + "             - What I can do");
    this.echo("|  " + commandText("awards") + "             - Awards and features for my work");
    // this.echo();
    // this.echo("|  " + commandText("social") + "             - My Social Status");
    this.echo("|");
    this.echo("|  " + commandText("contact") + "            - Contact me")
    // this.echo("|  " + commandText("credits") + "            - Credits for this website");
    this.echo("|");
    this.echo("|  " + commandText("download") + "           - DOWNLOAD MY RESUME! (pdf) ");
    this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
    this.echo();
  },
  social: function(){
    this.echo();
    this.echo("|  " + commandText("Blog") + ":         http://blog.bikash.dev");
    this.echo("|  " + commandText("GitHub") + ":       http://www.github.com/beeeku");
    this.echo("|  " + commandText("Facebook") + ":     https://www.facebook.com/beeeku");
    this.echo("|  " + commandText("LinkedIn") + ":     https://in.linkedin.com/in/beeeku");
    this.echo("|  " + commandText("Twitter") + ":      https://twitter.com/beeeku");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  http://www.github.com/beeeku");
    this.echo();
  },

  facebook: function(){
    this.echo();
    this.echo("|  https://www.facebook.com/beeeku");
    this.echo();
  },

  linkedin: function(){
    this.echo();
    this.echo("|  https://www.linkedin.com/in/beeeku");
    this.echo();
  },

  twitter: function(){
    this.echo();
    this.echo("|  https://twitter.com/beeeku");
    this.echo();
  },
  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|  " + commandText('CTO') + "                             at " + commandText("Classplus") + "\n|  Aug 2015 - Present");
    this.echo("|    In Classplus my responsibilities are —");
    this.echo("|    • Being the first programmer of the company to build the platform from scratch .");
    this.echo("|    • Designing Scalable Architecture and Managing Servers.");
    this.echo("|    • Hiring and Leading Engineering Team of 8 members.");
    this.echo("|    • Letting Innovation and Research drive the product development.");
    this.echo("|");
   
    this.echo("|  " + commandText('Full Stack Developer') + "                                       at " + commandText("EatAds") + "\n|  Jan 2015 - Jun 2015");
    this.echo("|    • Built a CRM with zoho like capabilities and interface like trello.  ");
    this.echo("|    • I am responsible for the whole product from backend to frontend . ");
   
    this.echo("|");
     this.echo("|  " + commandText('Associate Software Developer ') + "            at " + commandText("VoiceTree Technologies") + "\n|  Jun 2014 - Jan 2015");
    this.echo("|    • Worked on PHP using OOPS with MVC architecture. Deployment Of Asterisks , ISDN , Extensions and Elastic search etc. \n     • As an Associate Software Developer at VoiceTree Technology, I worked on 2 different products of voicetree tecnology .\n     • i.e MYOPERATOR and CODAC , both deals with cloud telephony.    ");
    this.echo("");

  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('Bikash Dash'));
    this.echo("|  DOB:          06/12/1993 (" + commandText('24') + " y.o)");
    this.echo("|");
    this.echo("|  Summary:      I am a Backend  Developer (primarily " + commandText('Node.js') + ", " + commandText('PHP') + ") ");
    this.echo("|                I'm passionate about making people's lives better through software.\n|                Whether it's a small piece of functionality implemented in a way that is\n|                seamless to the user, or it's a largescale effort to improve the\n|                performance and usability of software, I'm there." );
  
    this.echo("|");
    this.echo("|  Employment:   I am currently building " + commandText("XPrep") + " in the " + commandText("New Delhi") + " area. \n|                Get in touch if you'd like to discuss a proposal!");
    this.echo();
  },
  
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    // this.echo("|  " + commandText('Web Back-End'));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Back-End] ");
    this.echo("|  " + commandText('Node.js') + "                  ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('PHP') + "                      ##[[g;#5BD100;]############################################]       ##");
    this.echo("|");
    // this.echo("|  " + commandText("Web Front-End"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Front-End] ");
    this.echo("|  " + commandText('Javascript') + "               ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('CSS') + "                      ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText('HTML5') + "                    ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|");
    // this.echo("|  " + commandText("Database"));
    // this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('MySQL') + "                    ##[[g;#5BD100;]#######################################]            ##");
    this.echo("|  " + commandText('MongoDB') + "                  ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Machine Learning] ");
    // this.echo("|");
    this.echo("|  " + commandText('Deep Learning') + "            ##[[g;#B2D100;]##################################]                 ##");
    this.echo("|  " + commandText('Tensorflow & Tensorboard') +" ##[[g;#B2D100;]################################]                   ##");
    this.echo("|  " + commandText('Scikit Learn') + "             ##[[g;#D1B900;]########################]                           ##");
    this.echo("|");
    
    this.echo("|  [[g;#B2D100;]Servers] ");
    // this.echo("|");
    this.echo("|  " + commandText('Ubuntu Linux') + "             ##[[g;#B2D100;]##################################]                 ##");
    this.echo("|  " + commandText('Heroku') + "                   ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|  " + commandText('AWS') + "                      ##[[g;#5BD100;]##########################################]         ##");
    this.echo();
    
  },

  contact: function(){
    this.echo();
    this.echo("|  " + commandText("Email") + ":         beeeku@gmail.com");
    this.echo("|  " + commandText("Phone") + ":         (91) 876 300 6001");
    this.echo();
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Site built by " + commandText('Bikash Dash'));
    this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
    this.echo();
  },
  award: function(){
    this.exec('awards');
  },
  awards: function(){
    this.echo();
    this.echo("|  " + commandText('Top 5 in AngelHack Hyderabad 2013') + "                                \n|   Sep 2013  ");
    this.echo("|  " + commandText('Winner Microsoft Wowzapp') + "                         Jan 2013  \n|   | Wozapp Cuttack");
    this.echo("|  " + commandText('Best Wev Developer') + "                    Jan  2012  \n|   | College of Enginnering Bhubaneswar");
  
    this.echo();
  },
  download: function(){
    window.location.href = "";
  },
  blog: function(){
    window.location.href = "";
  },
  resume: function(){
    this.echo("|  " + commandText("DOWNLOAD MY RESUME!") + "      ");
  },
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
  },
  all: function(){
    this.clear();
    this.exec('intro');
    this.exec('about');
    this.exec('work');
    this.exec('skills');
    this.exec('awards');
    // this.exec('github');
    // this.exec('linkedin');
    // this.exec('facebook');
    // this.exec('twitter');
    this.exec('social');
    this.exec('contact');
    this.echo("|  " + commandText("DOWNLOAD MY RESUME!") + "  https://beeeku.github.io/resume.pdf");
    // this.exec('credits');
  },
  sudo: function(){
    this.exec('login');
  },
  login: function(){
    this.echo("|  login function currently under development");
  },
  du: function(){
    this.echo("|  100%");
  },
  mv: function(){
    this.echo("|  dont't move!");
  },
  cp: function(){
    this.echo("|  dont't copy!");
  },
  mkdir: function(){
    this.echo("|  mkdir function currently under development");
  },
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = "https://beeeku.github.io/resume.pdf";
  } else {
    $('body').terminal(App, {
      greetings: function(cb){
          cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});
