Rails.application.routes.draw do
  root "messages#home"
  scope :api, defaults: {format: :json} do
    resources :messages
  end
end
