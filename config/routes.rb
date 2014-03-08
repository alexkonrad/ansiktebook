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
  resource :photos, only: [:create]
  resource :posts, only: [:create]
  resource :comments, only: [:create]
  resource :likes, only: [:create]
  resource :tags, only: [:create]
  resource :session, only: [:create, :destroy]
  delete 'posts/:id', to: "posts#destroy", as: "posts"
  delete 'photos/:id', to: "photos#destroy", as: "photos"
  delete 'comments/:id', to: "comments#destroy", as: "comments"
  delete 'likes/:id', to: "likes#destroy", as: "likes"
  delete 'tags/:id', to: "tags#destroy", as: "tags"
  root to: "static_pages#index"

  get 'demo', to: "sessions#demo"
end
