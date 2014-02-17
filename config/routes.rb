Facebook::Application.routes.draw do
  resources :static_pages, only: [:index]
  resources :users
  resource :session, only: [:create, :destroy]

  root to: "static_pages#index"
end
