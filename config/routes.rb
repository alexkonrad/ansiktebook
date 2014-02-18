Facebook::Application.routes.draw do
  resources :static_pages, only: [:index]
  resources :users do
    resources :posts, except: [:edit, :update, :show]
  end
  resources :posts, only: [:edit, :update, :show]
  resource :session, only: [:create, :destroy]

  root to: "static_pages#index"
end
