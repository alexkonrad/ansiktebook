Facebook::Application.routes.draw do
  resources :static_pages, only: [:index]
  resources :users do
    resources :notifications, only: [:index]
    resources :posts, except: [:show]
    resources :posts, only: [:show] do
      resources :comments, only: [:index, :create]
      resource :likes, only: [:create, :destroy]
    end
    resources :photos, only: [:new, :create, :index]
    resources :photos, only: [:show] do
      resources :comments, only: [:index, :create]
      resource :tags, only: [:create, :destroy]
      resource :likes, only: [:create, :destroy]
    end
    resource :friend_request, only: [:create, :destroy]
    resources :friend_requests, only: [:index]
    resource :friendship, only: [:destroy]
  end
  resources :photos, only: [:destroy]
  resources :comments, only: [:destroy]
  resource :session, only: [:create, :destroy]

  namespace :api do
    resources :users do
      resources :posts
      resources :photos
    end
  end

  root to: "static_pages#index"

  get 'demo', to: "sessions#demo"
end
