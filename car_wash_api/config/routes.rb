Rails.application.routes.draw do
  resources :companies
  mount_devise_token_auth_for 'User', at: 'auth'
end
