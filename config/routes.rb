LearningApp::Application.routes.draw do
  HighVoltage.configure do |config|
      config.home_page = 'about'
  end

  get "pages/audio_playlist"
  get "pages/greeter"
end
