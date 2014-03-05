LearningApp::Application.routes.draw do
  HighVoltage.configure do |config|
      config.home_page = 'about'
  end
end
