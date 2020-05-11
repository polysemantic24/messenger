Rails.application.routes.draw do
  root 'chatroom#index'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  post 'message', to: 'messages#create'

  get 'signup', to: 'users#new'
  post 'signup', to: 'users#create'
  resources :users

  mount ActionCable.server, at: '/cable'
end
