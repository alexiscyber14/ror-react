class MessagesController < ApplicationController
    def index
        @messages = Message.all.sample
        render json: @messages
    end
end
