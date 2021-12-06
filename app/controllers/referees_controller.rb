class RefereesController < ApplicationController
def index
    refs = Referee.all
    render json: refs
end
end

